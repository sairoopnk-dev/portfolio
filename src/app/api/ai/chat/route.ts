import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { SYSTEM_PROMPT } from '@/lib/ai/prompt';
import { buildPortfolioContext } from '@/lib/ai/context-builder';

// Basic in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_MAX = parseInt(process.env.AI_RATE_LIMIT || '20', 10);
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const AI_MODEL = process.env.AI_MODEL || 'gemini-2.5-flash';

export async function POST(req: NextRequest) {
  try {
    // 1. Rate limiting
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;
    
    // Cleanup old entries periodically or inline
    if (rateLimitMap.has(ip)) {
      const data = rateLimitMap.get(ip)!;
      if (data.timestamp < windowStart) {
        // Reset window
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      } else {
        if (data.count >= RATE_LIMIT_MAX) {
          return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
        }
        data.count++;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // 2. Validate request
    if (!process.env.GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not configured');
      return NextResponse.json({ error: 'AI is temporarily unavailable.' }, { status: 503 });
    }

    let body;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
    }

    if (!body || !Array.isArray(body.messages)) {
      return NextResponse.json({ error: 'Invalid request format.' }, { status: 400 });
    }

    const messages = body.messages;

    if (messages.length > 10) {
      return NextResponse.json({ error: 'Conversation too long.' }, { status: 400 });
    }

    // Ensure all messages have role and content, and sanitize
    const sanitizedHistory = [];
    for (let i = 0; i < messages.length - 1; i++) {
        const msg = messages[i];
        const mappedRole = msg.role === 'assistant' ? 'model' : msg.role === 'user' ? 'user' : null;
        if (mappedRole && typeof msg.content === 'string') {
            sanitizedHistory.push({
                role: mappedRole,
                parts: [{ text: msg.content.substring(0, 1000) }]
            });
        }
    }

    const lastMessage = messages[messages.length - 1];
    if (!lastMessage || lastMessage.role !== 'user' || typeof lastMessage.content !== 'string') {
      return NextResponse.json({ error: 'Invalid last message.' }, { status: 400 });
    }

    if (lastMessage.content.length > 500) {
      return NextResponse.json({ error: 'Message too long.' }, { status: 400 });
    }

    // 3. Build portfolio context
    const context = buildPortfolioContext();
    const fullSystemInstruction = SYSTEM_PROMPT + context;

    // 4. Initialize Gemini
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    const chat = ai.chats.create({
      model: AI_MODEL,
      config: {
        systemInstruction: fullSystemInstruction,
      },
      history: sanitizedHistory,
    });

    // 5. Call API with streaming
    const result = await chat.sendMessageStream({ message: lastMessage.content });

    // 6. Return standard ReadableStream
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result) {
            if (chunk.text) {
              controller.enqueue(encoder.encode(chunk.text));
            }
          }
          controller.close();
        } catch (error) {
          console.error('Error streaming Gemini response:', error);
          controller.error(error);
        }
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
      },
    });
  } catch (error) {
    console.error('Unhandled API error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}
