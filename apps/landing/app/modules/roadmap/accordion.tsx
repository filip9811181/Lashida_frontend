'use client';

import React, { FC } from 'react';
import { cn } from '@/lib/utils';

interface AccordionProps {
  title: string;
  content: string;
  isActive: boolean;
  onToggle: () => void;
}

const Accordion: FC<AccordionProps> = ({ title, content, isActive, onToggle }) => {
  return (
    <button
      className={cn(
        'w-full rounded-[23px] border-[3px] border-black px-[10px] lg:px-[52px] py-[10px] text-left transition-all duration-300 ease-in-out overflow-hidden',
        isActive ? 'bg-[#FFFFFF]' : 'bg-[#FAECCD]'
      )}
      onClick={onToggle}
    >
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <p className="text-black text-[15px] md:text-[24px] font-britti font-bold leading-[150%]">
            {title}
          </p>
          <p className="text-black text-[26px] md:text-[42px] font-flick">
            {isActive ? '-' : '+'}
          </p>
        </div>

        {/* Content with smooth animation */}
        <div
          className={cn(
            'transition-all duration-500 ease-in-out overflow-hidden',
            isActive ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'
          )}
        >
          <p className="text-black text-[12px] md:text-[20px] font-britti font-light leading-[150%]">
            {content}
          </p>
        </div>
      </div>
    </button>
  );
};

export default Accordion;
