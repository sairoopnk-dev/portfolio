import React from 'react';
import { AvailabilityStatus } from '@/types';
import { cn } from '@/lib/utils';

interface StatusBadgeProps {
  status: AvailabilityStatus;
  label?: string;
  className?: string;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  className
}) => {
  const statusConfig = {
    available: {
      defaultLabel: 'Open to opportunities',
      dotColor: 'bg-emerald-500',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      textColor: 'text-emerald-400'
    },
    unavailable: {
      defaultLabel: 'Currently occupied',
      dotColor: 'bg-rose-500',
      bgColor: 'bg-rose-500/10',
      borderColor: 'border-rose-500/20',
      textColor: 'text-rose-400'
    },
    busy: {
      defaultLabel: 'Limited availability',
      dotColor: 'bg-amber-500',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/20',
      textColor: 'text-amber-400'
    }
  };

  const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.available;
  const displayLabel = label || (status in statusConfig ? statusConfig[status as keyof typeof statusConfig].defaultLabel : status);

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium border',
        config.bgColor,
        config.borderColor,
        config.textColor,
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        {status === 'available' && (
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        )}
        <span className={cn('relative inline-flex rounded-full h-2 w-2', config.dotColor)} />
      </span>
      {displayLabel}
    </span>
  );
};
