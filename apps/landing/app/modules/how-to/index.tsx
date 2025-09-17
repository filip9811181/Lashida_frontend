'use client';

import React from 'react';

import { AnimatedMedia } from '@/components/animated-media';
import { StrokeText } from '@/components/stroke-text';
import dynamic from 'next/dynamic';
import Image from 'next/image';

import { ArrowSvg } from './arrow-svg';
import { Ball2 } from './ball2';
import { Giveaway } from './giveaway';
import { Leaf1 } from './leaf1';
import { Leaf2 } from './leaf2';
import { Leaf3 } from './leaf3';
import { LeftMountainMobile } from './left-mountain-mobile';
import { Plant } from './plant';
import { RightMountainMobile } from './right-mountain-mobile';
import { Step1Bg } from './step1-bg';
import { Svg1 } from './svg-1';

const LeftMountain = dynamic(() => import('./left-mountain'), { ssr: false });
const RightMountain = dynamic(() => import('./right-mountain'), { ssr: false });

const HowTo = () => {
  return (
    <div className='relative w-full -mt-1 flex flex-col items-center bg-gradient-to-b from-[#988462] to-[#FFF4DE] z-50 pt-5'>
      <div className='absolute bottom-[600px] lg:-top-[200px] -right-[100px] lg:right-0'>
        <Leaf1 />
      </div>
      <div className='absolute -right-[100px] lg:right-0 bottom-[600px] lg:top-[600px]'>
        <Leaf2 />
      </div>
      <div className='absolute -right-10 lg:right-0 bottom-0 lg:-bottom-[300px]'>
        <Leaf3 />
      </div>
      <div className='absolute -left-10 bottom-[700px] lg:hidden scale-x-[-1] '>
        <Leaf3 />
      </div>
      <Image
        src='/images/coffee-stain.webp'
        width={218}
        height={250}
        alt=''
        loading='lazy'
        className='absolute -left-20 bottom-[820px] mix-blend-multiply  lg:hidden -z-[1] -rotate-90'
      />
      <div className='absolute -bottom-10 lg:-bottom-[200px] left-0'>
        <Plant />
      </div>

      <div className=' absolute -bottom-1 w-full h-20 lg:h-[332px] bg-gradient-to-b from-[rgba(237,224,200,0)] to-[#FFF4DE] -z-[1]'></div>

      <div className='absolute bottom-20 lg:bottom-[200px] left-1/2 -translate-x-1/2 lg:left-20 xl:left-[200px]'>
        <div className='w-[349px] h-[332px] lg:w-[400px] lg:h-[410px] xl:w-[522px] xl:h-[510px] 3xl:w-[572px] 3xl:h-[544px] absolute left-0 bottom-[160px] lg:bottom-[430px] z-50 '>
          <AnimatedMedia
            webmSrc='/images/how-to-animation-compressed.webm'
            gifSrc='/images/how-to-animation-compressed.gif'
            alt=''
          />
        </div>
        <Svg1 />
        <ArrowSvg />
        <div className='absolute bottom-[240px] -right-[40px] lg:hidden z-50'>
          <Ball2 />
        </div>
      </div>
      <div className='w-full max-w-[1920px] h-full relative flex flex-col items-center -mt-[220px] lg:mt-0 lg:mr-10 px-4 lg:px-0'>
        <StrokeText
          text='How To Buy'
          className='text-[70px] lg:text-[128px] font-nerko text-black leading-[72%] font-normal text-stroke-[0.125em] text-left break-all'
        />
        <div className='mt-3 lg:mt-[10px] flex flex-col md:flex-row justify-center items-center gap-5 lg:gap-[42px] flex-wrap px-4 lg:px-0'>
          <div className='relative'>
            <div className='w-[325px] md:w-[355px] h-[545px] md:h-[585px] bg-[#FF9385] border-[4px] border-black rounded-[33px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-between pt-1 md:pt-[27px] pl-[37px] pr-[53px]'>
              <div className='flex flex-col relative flex-1 overflow-hidden w-full'>
                <StrokeText
                  className='text-[36px] ml-1 font-nerko text-black leading-[36px] font-normal text-stroke-[0.18em] '
                  text='Step 1'
                />
                <p className='mt-[27px] mb-[25px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Connect Wallet Use MetaMask or Trust Wallet.
                </p>
                <p className='mb-[17px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Network Selection
                </p>
                <p className='text-[18px] leading-[26px] font-inter font-normal text-white'>
                  → Choose Ethereum (ETH), Base Chain (ETH L2), or Binance Smart Chain (BSC).
                </p>
                <p className='mb-[17px] mt-[15px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Connect Wallet
                </p>
                <p className='text-[18px] leading-[26px] font-inter font-normal text-white'>
                  Tap “Connect Wallet” on the presale dashboard.
                </p>
                <div className='absolute bottom-0 w-[345px] h-[203px] md:h-[254px] left-1/2 -translate-x-1/2'>
                  <AnimatedMedia gifSrc='/images/how-to-animations/how-animation-3.gif' alt='' />
                </div>
              </div>
            </div>
            <Step1Bg fill='#3B4B97' />
          </div>
          <div className='relative'>
            <div className='w-[325px] md:w-[355px] h-[545px] md:h-[585px] bg-[#FBAD22] border-[4px] border-black rounded-[33px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-between pt-1 md:pt-[27px] pl-[37px] pr-[33px]'>
              <div className='flex flex-col relative flex-1 overflow-hidden w-full'>
                <StrokeText
                  className='text-[36px] ml-1 font-nerko text-black leading-[36px] font-normal text-stroke-[0.18em] '
                  text='Step 2'
                />
                <p className='mt-[17px] mb-[15px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Choose Token & Amount Select ETH, USDT, USDC (Ethereum/ BSC) or BNB (BSC only).
                </p>
                <p className='mb-[15px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Set Your Amount
                </p>
                <p className='text-[18px] leading-[26px] font-inter font-normal text-white'>
                  Enter your desired amount to view how many $NEOP tokens you&lsquo;ll receive.
                </p>
                <p className='mb-[17px] mt-[15px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Approve Transaction
                </p>
                <p className='text-[18px] leading-[26px] font-inter font-normal text-white'>
                  For stablecoins (USDT, USDC), approve contract first.
                </p>
                <div className='absolute -bottom-2 w-[209px] h-[194px] md:w-[232px] md:h-[232px] left-1/2 -translate-x-1/2'>
                  <AnimatedMedia gifSrc='/images/how-to-animations/how-animation-2.gif' alt='' />
                </div>
              </div>
            </div>
            <Step1Bg fill='#AC6249' />
          </div>
          <div className='relative'>
            <div className='w-[325px] md:w-[355px] h-[545px] md:h-[585px]] bg-[#628A48] border-[4px] border-black rounded-[33px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-between pt-1 md:pt-[27px] pl-[37px] pr-[0px]'>
              <div className='flex flex-col relative flex-1 overflow-hidden w-full'>
                <StrokeText
                  className='text-[36px] ml-1 font-nerko text-black leading-[36px] font-normal text-stroke-[0.18em] '
                  text='Step 3'
                />
                <p className='mt-[27px] mb-[25px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Confirm and Buy Review your details, then confirm purchase.
                </p>
                <p className='mb-[16px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Confirm in Wallet.
                </p>
                <p className='text-[18px] leading-[26px] font-inter font-normal text-white'>
                  Approve the transaction in your wallet pop-up.
                </p>
                <p className='mb-[16px] mt-[15px] font-patrick font-normal text-[24px] leading-[88%]'>
                  Receive Tokens
                </p>
                <p className='text-[18px] leading-[26px] font-inter font-normal text-white'>
                  Tokens arrive directly in your wallet after successful confirmation.
                </p>
                <div className='absolute -bottom-6 w-[252px] h-[202px] md:w-[284px] md:h-[250px] left-1/2 -translate-x-1/2'>
                  <AnimatedMedia gifSrc='/images/how-to-animations/how-animation-1.gif' alt='' />
                </div>
              </div>
            </div>
            <Step1Bg fill='#F2AE28' />
          </div>
        </div>
        <div className='grid lg:grid-cols-[5fr_7fr] w-full pt-[278px] lg:pt-[364px] pb-[561px] '>
          <div />
          <div className='flex flex-col items-center w-fulllg:max-w-[1083px]'>
            <p
              className='relative text-[46px] leading-[46px] lg:text-[64px] font-flick lg:leading-[64px] text-stroke-[0.125em] before:content-[attr(data-content)] before:gradient-text before:text-stroke-[0em] before:absolute before:inset-0 before:flex before:items-center before:justify-center text-center'
              data-content='Collect all 7 LaShiba Inu Balls'
            >
              Collect all 7 LaShiba Inu Balls
            </p>
            <StrokeText
              className='text-[72px] lg:text-[60px] font-nerko text-black leading-[72%] content-center font-normal text-stroke-[0.125em] '
              text='And Enter'
            />
            <Giveaway className='w-full h-[78px] lg:h-[208px]' />
          </div>
        </div>
        <LeftMountainMobile />
        <RightMountain />
        <RightMountainMobile />
        <LeftMountain />
      </div>
    </div>
  );
};

export default HowTo;
