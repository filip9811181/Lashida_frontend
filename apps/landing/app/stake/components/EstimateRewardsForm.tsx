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

export const EstimateRewardsForm = () => {
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
            text='Estimate Rewards'
          />

          <Content value='53%' token='P/A' className='mt-[12px]' hideCash={true} />

          <div className="mt-[12px]">
            {
              estimatedRewards.map((reward, index) => (
                <div className="flex flex-row mt-[6px] items-center">
                  <Image
                    className="w-[26px] h-[26px]"
                    src='/images/stake/check_button.png'
                    alt='cloud'
                    width={100}
                    height={100} />
                  <span className='mx-[4px]'>{reward.label}</span>
                  <StrokeText
                    className='text-[20px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.2em] '
                    text={reward.value}
                  />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <Image
        className='rotate-[-20deg] absolute left-[-16px] top-[-32px] z-[5] lg:z-[11]'
        src={'/images/stake/shelf.png'}
        alt=''
        width={44}
        height={40}
        loading='lazy' />
      <Image
        className='absolute right-[0px] top-[-54px] z-[5] lg:z-[11]'
        src={'/images/stake/duck.png'}
        alt=''
        width={61}
        height={58}
        loading='lazy' />
      <Image
        className='absolute right-[-150px] top-[-84px] z-[5] rotate-[8deg] scale-x-[-1] lg:hidden'
        src={'/images/about-animation-1.gif'}
        alt=''
        width={284}
        height={284}
        loading='lazy' />
    </ImageBorder>
  );
};
