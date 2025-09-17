import React, { useState } from 'react';

import { ImageBorder } from '@/components/image-border';
import { Lashiba } from '@/components/lashiba';
import { StrokeText } from '@/components/stroke-text';
import Image from 'next/image';
import { Circle } from './Circle';
import { Content } from './Content';

const estimatedRewards = [
  { label: 'Reward rate is ', value: 'Dynamic' },
  { label: 'Monthly = ', value: 'Rewards % / 12' },
  { label: 'Daily = ', value: 'Rewards % / 365' },
]

export const ClaimRewardsForm = () => {
  return (
    <ImageBorder
      border='20px solid transparent'
      borderImage="url('/images/stake/form_panel.png')"
      borderImageSlice={24}
      wrapperClassName='w-fit z-10 w-[300px] h-[305px] relative'>
      <div className='w-full border-[4px] border-[#000000] 
          rounded-[16px] bg-[#78A16D] relative py-[8px]'>
        <div className='ml-[4px] mt-[4px] absolute'>
          <Circle />
        </div>

        <div className='flex flex-col items-center justify-center mt-[12px]' >
          <StrokeText
            className='text-[22px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.2em] '
            text='Current Rewards'
          />

          <span className='mt-[12px]'>608.82 Per ETH Block</span>
        </div>
      </div>
      <div className='w-full border-[4px] border-[#000000] 
          rounded-[16px] bg-[#78A16D] mt-[16px] relative py-[8px]'>
        <div className='ml-[4px] mt-[4px] absolute'>
          <Circle />
        </div>

        <div className='flex flex-col items-center justify-center mt-[12px]' >
          <StrokeText
            className='text-[22px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.2em] '
            text='% of Pool'
          />

          <Content value='608.82 Per ETH Block' token='' className='mt-[12px]' hideCash={true} />

          <button
            className='w-[129px] h-[51px] bg-[url("/images/green-button.webp")] bg-cover bg-no-repeat text-[18px] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%] mt-[12px]'>
            Claim Rewards
          </button>
        </div>
      </div>
      <Image
        className='absolute right-[-24px] top-[-44px] z-[5] lg:z-[11]'
        src={'/images/stake/shroom4.png'}
        alt=''
        width={32}
        height={51}
        loading='lazy' />
      <Image
        className='absolute left-[16px] bottom-[-10px] z-[5] lg:z-[11] scale-x-[-1]'
        src={'/images/stake/shroom4.png'}
        alt=''
        width={32}
        height={51}
        loading='lazy' />
    </ImageBorder>
  );
};
