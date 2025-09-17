import React, { useState } from 'react';

import { ImageBorder } from '@/components/image-border';
import { Lashiba } from '@/components/lashiba';
import { StrokeText } from '@/components/stroke-text';
import Image from 'next/image';
import { Circle } from './Circle';
import { Content } from './Content';

export const TotalStakedForm = () => {
  return (
    <ImageBorder
      border='20px solid transparent'
      borderImage="url('/images/stake/form_panel.png')"
      borderImageSlice={24}
      wrapperClassName='w-fit z-10 w-[300px] h-[305px] relative'>
      <div className='h-full w-full border-[4px] border-[#000000] 
          rounded-[16px] bg-[#78A16D]'>
        <div className='ml-[4px] mt-[4px]'>
          <Circle />
        </div>

        <div className='flex flex-col items-center justify-center mt-[12px]' >
          <StrokeText
            className='text-[24px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.2em] '
            text='% of Pool'
          />
          
          <Content value='0%' token='' className='mt-[12px]'/>
          <span className='mt-[12px]'></span>
          <StrokeText
            className='text-[24px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.2em] '
            text='Total Staked'
          />

          <Content value='10000000' token='Lashiba' className='mt-[12px]'/>

          <button 
            className='w-[129px] h-[51px] bg-[url("/images/green-button.webp")] bg-cover bg-no-repeat text-[20px] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%] mt-[12px]'>
            Buy Now
          </button>
        </div>
      </div>
      <Image
        className='rotate-[160deg] absolute right-[-4px] top-[-20px]'
        src={'/images/stake/shelf.png'}
        alt=''
        width={66}
        height={60}
        loading='lazy'
      />
    </ImageBorder>
  );
};
