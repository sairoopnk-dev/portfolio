'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { AIFloatingButton } from './AIFloatingButton';
import { useMounted } from '@/hooks/use-mounted';

const AIChatPanel = dynamic(() => import('./AIChatPanel').then(mod => mod.AIChatPanel), {
  ssr: false,
  loading: () => null,
});

export const SairoopAI: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const mounted = useMounted();

  if (!mounted) return null;

  return (
    <>
      <AIFloatingButton onClick={() => setIsOpen(true)} isOpen={isOpen} />
      <AIChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};
