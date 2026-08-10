'use client';

import React, { useState } from 'react';

export const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Job Opportunity', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-8 text-center space-y-3">
        <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Message Sent!</h3>
        <p className="text-sm text-muted-foreground">
          Thank you for reaching out. I'll get back to you within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-6 sm:p-8">
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Name *</label>
        <input
          type="text"
          required
          placeholder="John Doe"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email Address *</label>
        <input
          type="email"
          required
          placeholder="john@example.com"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none transition-colors"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Subject</label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground focus:border-ring focus:outline-none transition-colors"
        >
          <option value="Job Opportunity">Job Opportunity</option>
          <option value="Project Collaboration">Project Collaboration</option>
          <option value="General Inquiry">General Inquiry</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Your Message *</label>
        <textarea
          required
          rows={5}
          placeholder="Tell me about your project or opportunity..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-ring focus:outline-none transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-md bg-primary hover:bg-primary/90 py-3 text-sm font-semibold text-primary-foreground transition-colors shadow-md"
      >
        Send Message →
      </button>

      <p className="text-center text-xs text-muted-foreground pt-1">
        Usually replies within 24–48 hours
      </p>
    </form>
  );
};
