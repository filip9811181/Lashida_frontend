import React from 'react';

import { ImageBorder } from '@/components/image-border';
import { Lashiba } from '@/components/lashiba';
import { StrokeText } from '@/components/stroke-text';
import Image from 'next/image';

export const DesktopBlock = () => {
  return (
    <ImageBorder wrapperClassName='w-fit hidden lg:block'>
      <div className='h-full w-full border-[7px] border-[#000000] rounded-[50px] bg-[#78A16D] pt-[27px] pb-[67px] flex flex-col items-center gap-[30px] px-[90px]'>
        <div className='flex flex-row justify-center items-end'>
          <Image
            src='/images/lashiba-face.webp'
            width={147}
            height={185}
            alt='lashiba face'
            loading='lazy'
          />
          <div className='flex flex-col items-end gap-4 mr-[11px] ml-[18px]'>
            <div className='mr-[144px]'>
              <StrokeText
                className='text-[60px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.125em] text-left '
                text='About'
              />
            </div>
            <Lashiba className='mr-[11px] ml-[18px] w-[571px] h-[152px]' />
          </div>
          <StrokeText
            className='text-[67px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.125em] text-left '
            text='Inu'
          />
        </div>
        <p className=' text-lg leading-[24px] font-inter font-black text-white text-center max-w-[780px]'>
          LaShiba Inu is the unruly child of two cultural powerhouses; the playful chaos of Labubu
          and the viral magic of Shiba. Part collectible grail, part crypto degen’s fever dream,
          LaShiba Inu isn’t just another meme it’s a full-blown phenomenon!
          <br />
          <br />
          <span className='font-normal'>
            Birthed in the pixelated depths of internet lore and brought to life on the blockchain,
            <span className='font-semibold'> LaShiba Inu</span> arrives to rewrite the meme coin
            saga with flair, mischief and unstoppable momentum.{' '}
            <span className='font-semibold'>LaShiba</span> Inu twists together the hype of
            collectible culture with the wild energy of Web3. A collectible icon with a serious
            attitude.
          </span>
        </p>
        <StrokeText
          className='lg:text-[58px] xl:text-[67px] font-nerko text-black leading-[70%] font-normal text-stroke-[0.125em] text-left'
          text='Smart Contracts Audited By'
        />

        <div className='flex flex-row items-center justify-center flex-wrap gap-[26px]'>
          <Image
            width={241}
            height={62}
            src='/images/coinsult.webp'
            alt='coinsult'
            loading='lazy'
          />
          <Image
            width={281}
            height={88}
            src='/images/cyberscope.webp'
            alt='cyberscope'
            loading='lazy'
          />
          <Image width={241} height={67} src='/images/certirk.webp' alt='certirk' loading='lazy' />
        </div>
      </div>
    </ImageBorder>
  );
};
