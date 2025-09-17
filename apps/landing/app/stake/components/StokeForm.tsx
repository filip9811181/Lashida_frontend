import React, { useState } from 'react';

import { ImageBorder } from '@/components/image-border';
import { Lashiba } from '@/components/lashiba';
import { StrokeText } from '@/components/stroke-text';
import Image from 'next/image';
import { Circle } from './Circle';
import { Content } from './Content';

export const StokeForm = () => {
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
            text='Stoced Balance'
          />

          <Content value='1' token='Lashiba' className='mt-[12px]' />
          <span className='mt-[12px]'></span>
          <StrokeText
            className='text-[24px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.2em] '
            text='Your stakable'
          />

          <Content value='10' token='Lashiba' className='mt-[12px]' />

          <button
            className='w-[129px] h-[51px] bg-[url("/images/green-button.webp")] bg-cover bg-no-repeat text-[20px] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%] mt-[12px]'>
            Buy Now
          </button>
        </div>
      </div>
      <Image
        className='hidden lg:block rotate-[--44.57deg] absolute right-[-28px] top-[-28px]'
        src={'/images/stake/shelf.png'}
        alt=''
        width={66}
        height={60}
        loading='lazy'
      />
      <Image
        className='lg:hidden absolute left-[-120px] top-[-80px]'
        src={'/images/stake/cloud.png'}
        alt=''
        width={104}
        height={64}
        loading='lazy'
      />
      <Image
        className='lg:hidden absolute left-[-170px] bottom-[-110px] w-[352px] h-[327px] rotate-[16deg]'
        src={'/images/animated-hero-shiba-compressed.gif'}
        alt=''
        width={0}
        height={0}
        loading='lazy'
      />
    </ImageBorder>
  );
};
