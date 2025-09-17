import React, { useState } from 'react';

import { ImageBorder } from '@/components/image-border';
import Image from 'next/image';
import { Circle } from './Circle';
import { StrokeText } from '@/components/stroke-text';

export const ChartPanel = () => {
  return (
    <div className='mx-[-48px] lg:mx-0'>
      <ImageBorder
        border='40px solid transparent'
        borderImage="url('/images/stake/chart_panel.png')"
        borderImageSlice={80}
        bgColor='bg-[#AC6249]'
        wrapperClassName='w-fit w-full z-10 '>
        <div className='w-full border-[4px] border-[#000000] relative rounded-[16px] bg-[#F5DEB6]'>
          <div className='ml-[4px] mt-[4px]'>
            <Circle />
          </div>
          <div className='flex flex-col-reverse lg:flex-col relative px-[16px] mt-[2px]'>
            <div className='text-right lg:text-center'>
              <div
                className='bg-[#AC6249] px-[8px] py-[4px] rounded-[16px] h-[32px] inline-block'
                style={{
                  borderTopWidth: '2px',
                  borderLeftWidth: '3px',
                  borderColor: 'rgb(117 64 46)',
                }}
              >
                <StrokeText
                  className='text-[24px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.2em] '
                  text='Months'
                />
              </div>
            </div>
            <StrokeText
              className='text-[32px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.2em] '
              text='Total Supply' />
          </div>
          <div className='px-[16px] pb-[32px]'>
            <img
              src='/images/stake/chart_image.png'
              className={``}
              alt=""
            />
          </div>
        </div>
      </ImageBorder>
    </div>
  );
};
