import React, { FC } from 'react';

import { cn } from '@/lib/utils';

interface RoadmapCardProps {
  isWhite: boolean;
  phase: string;
  title: string;
  content: string[];
}

const RoadmapCard: FC<RoadmapCardProps> = ({ isWhite, phase, title, content }) => {
  return (
    <div
      className={cn(
        'w-[310px] h-[317px] sm:w-[400px] sm:h-[417px] flex flex-col justify-center items-center gap-[10px] sm:gap-[20px] p-[40px] sm:p-[20px] pt-[45px] sm:pt-[50px]',
        isWhite
          ? 'bg-[url("/images/roadmap-card-bg-mobile-white.webp")] sm:bg-[url("/images/roadmap-white-card.webp")]'
          : 'bg-[url("/images/roadmap-card-bg-mobile-grey.webp")] sm:bg-[url("/images/roadmap-grey-card.webp")]',
      )}
    >
      <div className='flex flex-col items-start w-[259px] ml-[110px] pt-[20px] xm:pt-0 sm:ml-[50px]'>
        <p className='text-orange text-[20px] sm:text-[23px] font-nerko text-stroke-bold leading-[72%] tracking-[0%]'>
          Phase {phase}:
        </p>
        <h4 className='text-white text-[32px] sm:text-[39px] font-nerko text-stroke-bold  leading-[72%] tracking-[0%]'>
          {title}
        </h4>
      </div>

      <div className='flex flex-col items-center gap-[10px] pl-[40px] sm:pl-[30px]'>
        {content.map((item, i) => (
          <p
            className='text-black text-[10px] sm:text-[12px] font-britti font-medium leading-[100%] tracking-[0%] max-w-[230px]'
            key={i}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default RoadmapCard;
