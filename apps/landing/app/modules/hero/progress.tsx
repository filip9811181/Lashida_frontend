'use client';

import React from 'react';
import Image from 'next/image';

interface ProgressProps {
  progress: number;
}

const Progress = ({ progress }: ProgressProps) => {
  return (
    <div
      className='w-full h-[34px] 2xl:h-[52px] border-[2.71px] bg-white border-black rounded-[33px] bottom-shadow p-[3.5px] 2xl:p-[6px] relative'
    >
      <div className='absolute right-[10px] top-2 2xl:top-[15px] bg-white rounded-full'>
        <p
          className='block text-[20px] 2xl:text-[30px] font-flick font-bold leading-[20px] 2xl:leading-[30px] tracking-[0%] text-stroke-[0.125em] before:content-[attr(data-content)] before:bg-gradient-to-br before:from-[#E897CB] before:to-[#D4379C] before:bg-clip-text before:text-transparent before:text-stroke-[0em] before:absolute relative z-10'
          data-content={`${Math.floor(progress)}%`}
        >
          {Math.floor(progress)}%
        </p>
      </div>
      <div
        className='h-[22px] 2xl:h-[36px] bg-gradient-to-r from-[#E897CB] to-[#E897CB] border-[2.71px] border-black rounded-[33px] relative'
        style={{ width: `${Math.floor(progress)}%` }}
      />
      <Image
        className='w-[41px] 2xl:w-[52px] h-[51px] 2xl:h-[67px] absolute top-[-20px] cursor-grab select-none'
        style={{ left: `calc(${Math.floor(progress)}% - 26px)` }} // Center the image at the end of the progress bar
        src='/images/lashiba-face.webp'
        alt='logo'
        width={52}
        height={67}
        draggable={false}
        loading='lazy'
      />
    </div>
  );
};

export default Progress;
