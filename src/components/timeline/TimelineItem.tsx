import React from 'react';

interface TimelineItemProps {
  children: React.ReactNode;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ children }) => {
  return (
    <div className="relative pl-8 sm:pl-10">
      <div className="absolute left-1.5 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-zinc-950" />
      {children}
    </div>
  );
};
