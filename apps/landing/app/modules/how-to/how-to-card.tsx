'use client';

import React, { FC } from 'react';

import { cn } from '@/lib/utils';

interface HowToCardProps {
  bg: string;
  bgDesktop: string;
  title: string;
  subtitle1: string;
  content1: string;
  subtitle2: string;
  content2: string;
  bgColor: string;
  video: string;
  index: number;
  imgWidth: string;
  imgHeight: string;
  className: string;
}

const HowToCard: FC<HowToCardProps> = ({
  bgDesktop,
  title,
  subtitle1,
  content1,
  subtitle2,
  content2,
  bgColor,
  video,
  index,
  imgWidth,
  imgHeight,
  className,
}) => {
  return (
    <div
      className={cn(
        'sm:w-[400px] 2xl:w-[440px] h-[630px] 2xl:h-[689px] justify-center itens-center p-[40px] relative bg-[url("/images/how-to-bg-1")] bg-cover bg-no-repeat',
        bgDesktop,
        className,
      )}
    >
      <div
        className={cn(
          ' w-full flex flex-col items-start gap-[25px] px-[37px] py-[27px] rounded-[33px] border-[4px] border-black overflow-hidden relative',
          bgColor,
        )}
      >
        <h4 className='text-white text-[36px] text-stroke-bold font-nerko leading-[72%] tracking-[0%]'>
          Step {index + 1}
        </h4>

        <h5 className='text-black text-[24px] font-patrick leading-[88%] tracking-[0%]'>{title}</h5>

        <div className=' w-full flex flex-col items-start gap-[15px]'>
          <p className='text-black text-[24px] font-patrick leading-[88%] tracking-[0%]'>
            {subtitle1}
          </p>
          <p className='text-white text-[18px] font-inter font-normal leading-[26px] tracking-[-1%]'>
            {content1}
          </p>
        </div>

        <div className=' w-full flex flex-col items-start gap-[15px] relative z-[1000]'>
          <p className='text-black text-[24px] font-patrick leading-[88%] tracking-[0%]'>
            {subtitle2}
          </p>
          <p className='text-white text-[18px] font-inter font-normal leading-[26px] tracking-[-1%]'>
            {content2}
          </p>
        </div>

        <video
          className={cn('absolute bottom-[-10px]', imgWidth, imgHeight)}
          autoPlay
          loop
          muted
          playsInline
          ref={videoElement => {
            if (videoElement) {
              videoElement.onended = () => {
                videoElement.play();
              };
            }
          }}
        >
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HowToCard;
