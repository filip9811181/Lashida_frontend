import React from 'react';
import { cn } from '@/lib/utils';

interface LabelProps {
  value: string | number;
  token: string;
  className?: string;
  hideCash?: boolean;
}

export const Content = ({
  value,
  token,
  className = '',
  hideCash = false,
}: LabelProps) => {

  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-[16px] font-bold text-white ',
        'px-4 text-[16px] h-[32px]',
        'bg-gradient-to-br from-[#4B6443] to-[#5A7A52]',
        className
      )}
      style={{
        borderTopWidth: '2px',
        borderLeftWidth: '3px',
        borderColor: '#2A3A2A',
      }}
    >
      {value} {token ? ((!hideCash ? '$' : '') + token) : ''}
    </div>
  );
};
