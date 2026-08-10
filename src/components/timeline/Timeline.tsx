import React from 'react';

interface TimelineProps {
  children: React.ReactNode;
}

export const Timeline: React.FC<TimelineProps> = ({ children }) => {
  return <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-border">{children}</div>;
};
