'use client';

import React from 'react';

import { ImageBorder } from '@/components/image-border';
import { Lashiba } from '@/components/lashiba';
import { StrokeText } from '@/components/stroke-text';
import Image from 'next/image';

import { Shell } from './shell';

export const MobileBlock = () => {
  const handleScroll = (
    href: string
  ) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className='relative'>
      <div className='absolute left-10 -top-5'>
        <Shell className='w-[60px] h-[55px] -rotate-[90deg] lg:hidden' />
      </div>
      <div className='absolute right-20 -top-3'>
        <Shell className='w-10 h-9 lg:hidden' />
      </div>
      <ImageBorder
        wrapperClassName='lg:hidden'
        borderImage="url('/images/green-border-mobile.svg')"
        border='30px solid transparent'
        borderImageSlice={30}
      >
        <div className='h-full w-full border-[2px] border-[#000000] rounded-[15px] bg-[#78A16D] pt-10 pb-[18px] flex flex-col items-center gap-[10px]'>
          <div className='flex flex-row justify-center items-end'>
            <Image
              src='/images/lashiba-face.webp'
              width={36}
              height={46}
              alt='lashiba face'
              loading='lazy'
            />
            <div className='flex flex-col'>
              <p className='font-nerko font-normal text-[20px] leading-[70%] text-[#FFFFFF] text_stroke_1 text-right -mb-3'>
                About
              </p>
              <Lashiba className='w-[194px] h-[52px]' />
            </div>
            <p className='font-nerko font-normal text-[26px] leading-[70%] text-[#FFFFFF] text_stroke_1'>
              Inu
            </p>
          </div>
          <div className='flex flex-col items-center mt-[2px] mb-[9px] px-5'>
            <p className='font-inter font-extrabold text-base text-white text-center'>
              LaShiba Inu is the unruly child of two cultural powerhouses; the playful chaos of
              Labubu and the viral magic of Pepe. Part collectible grail, part crypto degen’s fever
              dream, LaShiba Inu isn’t just another meme it’s a full-blown phenomenon!
            </p>
            <p className='font-inter text-base font-normal text-center text-white'>
              Birthed in the pixelated depths of internet lore and brought to life on the
              blockchain, LaShiba Inu arrives to rewrite the meme coin saga with flair, mischief and
              unstoppable momentum. LaShiba Inu twists together the hype of collectible culture with
              the wild energy of Web3. A collectible icon with a serious attitude.
            </p>
          </div>
          <StrokeText
            className='text-[28px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.125em] text-left break-all'
            text='Smart Contracts'
          />
          <StrokeText
            className='text-[28px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.125em] text-left break-all'
            text='Audited By'
          />
          <div className='flex flex-row items-center gap-2 flex-wrap px-2 justify-center mt-5'>
            <Image
              width={149}
              height={38}
              src='/images/coinsult.webp'
              alt='coinsult'
              loading='lazy'
            />
            <Image
              width={149}
              height={41}
              src='/images/cyberscope.webp'
              alt='cyberscope'
              loading='lazy'
            />
            <Image
              width={172}
              height={54}
              src='/images/certirk.webp'
              alt='certirk'
              loading='lazy'
            />
          </div>
          <button className='w-[202px] h-[80px] bg-[url("/images/green-button.webp")] bg-cover bg-no-repeat text-[23.66px] text-white font-nerko font-normal text_stroke_2_25 hover:opacity-50' onClick={() => handleScroll('home')} >
            Buy LaShiba Inu
          </button>
        </div>
      </ImageBorder>
    </div>
  );
};
