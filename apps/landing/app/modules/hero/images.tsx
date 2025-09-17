import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Ball } from './ball';
import { BeachBall } from './beach-ball';
import { Duck } from './duck';

const HeroVideo = dynamic(() => import('./video'), { ssr: false });

export const HeroImages = () => {
  return (
    <>
      <div className='absolute md:top-5 -left-[430px] rotate-[2deg] hidden md:block'>
        <div className='relative w-[1032px] h-[834px]'>
          <Image src='/parasol.webp' alt='animated shiba' fill loading='lazy' />
        </div>
      </div>
      <div className='absolute -top-[60px] md:top-5 -right-[550px] -rotate-[12deg]'>
        <div className='relative w-[1032px] h-[834px]'>
          <Image src='/parasol.webp' alt='animated shiba' fill loading='lazy' />
        </div>
      </div>
      <div className='absolute -bottom-1 lg:-bottom-10 -left-[60px] lg:-left-[100px] 3xl:left-0'>
        <div className='relative w-[304px] h-[282px] lg:w-[568px] lg:h-[512px] 2xl:w-[768px] 2xl:h-[712px] z-20'>
          <HeroVideo />
        </div>
      </div>
      <div className='absolute left-[60px] bottom-20 lg:bottom-[30px] 2xl:bottom-[60px] lg:left-[280px] 2xl:left-[437px]'>
        <div className='relative w-[188px] h-[177px] lg:w-[216px] lg:h-[200px] 2xl:w-[300px] 2xl:h-[290px] 3xl:w-[336px] 3xl:h-[317px]'>
          <Image src={'/images/castle-hero.webp'} alt='animated shiba' fill loading='lazy' />
        </div>
      </div>
      <div className='absolute  bottom-5 right-1 lg:bottom-[30px] 2xl:bottom-[60px] lg:left-[510px] 2xl:left-[769px] 3xl:left-[820px]'>
        <div className='relative w-[128px] h-[238px] lg:w-[110px] lg:h-[220px] 2xl:w-[196px] 2xl:h-[364px]'>
          <Image src='/shiba-hero.webp' alt='animated shiba' fill loading='lazy' />
        </div>
      </div>
      <div className='absolute  bottom-5 right-[55px] lg:bottom-10 lg:left-[620px] 2xl:left-[930px] 3xl:left-[1020px] z-[130]'>
        <BeachBall className='w-[79px] h-[78px] lg:w-[110px] lg:h-[110px] 2xl:w-[215px] 2xl:h-[213px]' />
      </div>
      <div className='absolute bottom-2 lg:bottom-[60px] 2xl:bottom-[110px] left-[114px] lg:left-[710px] 2xl:left-[1100px] 3xl:left-[1190px] z-[100]'>
        <Ball className='w-[56px] h-[52px] lg:w-[40px] lg:h-[40px] 2xl:w-[86px] 2xl:h-[81px]' />
      </div>

      <div className='absolute right-[122px] lg:right-2 bottom-5 lg:bottom-[9rem] z-0'>
        <Duck className='w-[61px] h-[57px] lg:w-[108px] lg:h-[105px] 2xl:w-[165px] 2xl:h-[156px]' />
      </div>
      <div className='hidden lg:block absolute lg:right-[150px] 2xl:right-[300px] bottom-[120px] z-[99]'>
        <Duck className='lg:w-[80px] lg:h-[83px] 2xl:w-[108px] 2x:h-[105px]' />
      </div>
      <div className='hidden lg:block absolute lg:right-[270px] 2xl:right-[470px] bottom-[80px] z-[99]'>
        <Duck className='lg:w-[75px] lg:h-[78px] 2xl:w-[99px] 2xl:h-[96px]' />
      </div>
    </>
  );
};
