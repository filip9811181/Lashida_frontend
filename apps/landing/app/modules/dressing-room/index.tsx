'use client';

import React from 'react';

import { Lashiba } from '@/components/lashiba';
import Image from 'next/image';

import DressShiba from './dress-shiba';

const DressingRoom = () => {
  return (
    <>
      <Image
        src='/images/dress-bg.webp'
        alt={`Background`}
        fill
        sizes='100vw'
        className='object-cover lg:object-fill'
        loading='lazy'
      />
      <section className='w-full h-[1000px] md:h-[1300px] lg:h-[1529px] flex justify-center items-center relative'>
        <Image
          className='absolute right-[70%] sm:right-[30px] md:right-[32px] bottom-[100px] md:bottom-[230px] z-[7]'
          src={'/images/halfMoon.png'}
          alt='star ball image'
          width={178.3222198486328}
          height={199}
          loading='lazy'
        />

        <div className='flex flex-col items-center gap-[84px] w-full'>
          <div className='flex flex-col items-center gap-[18px] w-full'>
            <Lashiba className='w-[278px] h-[59px] md:w-[445px] md:h-[119px]' />

            <h4 className='gradient-text2  text-[43px] md:text-[81px] text-stroke text-center font-flick font-bold leading-[72%] tracking-[0%]'>
              Dressing Room
            </h4>
          </div>

          <DressShiba />
        </div>
      </section>
    </>
  );
};

export default DressingRoom;
