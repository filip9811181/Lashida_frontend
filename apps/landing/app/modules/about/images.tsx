import React from 'react';

import dynamic from 'next/dynamic';
import Image from 'next/image';

import { Ball } from './ball';
import { Boat } from './boat';
import { Mashroom } from './mashroom';
import { Shell } from './shell';

const AboutVideo1 = dynamic(() => import('./video1'), { ssr: false });
export const Images = () => {
  return (
    <>
      <div className='absolute left-[38px]'>
        <Shell className='lg:size-[120px] 2xl:size-[167px] hidden lg:block' />
      </div>
      <div className='absolute left-[38px] top-[96px] 2xl:top-[112px] rotate-[90deg]'>
        <Shell className='lg:size-[120px] 2xl:size-[167px] hidden lg:block' />
      </div>
      <div className='absolute bottom-0 left-4 lg:left-[36px] z-[100]'>
        <div className='relative w-[197px] h-[398px] lg:w-[360px] lg:h-[690px] xl:w-[390px] xl:h-[727px] 2xl:w-[450px] 2xl:h-[900px] 3xl:w-[512px] 3xl:h-[957px]'>
          <Image src='/images/shiba-duck.webp' alt='animated shiba' fill loading='lazy' />
        </div>
      </div>
      <div className='absolute bottom-10 lg:bottom-0 2xl:-left-[100px] xl:-left-[75px] lg:-left-[50px] 3xl:-left-[125px] -rotate-[15deg]'>
        <div className='relative w-[100px] h-[120px] lg:w-[175px] lg:h-[225px] xl:w-[200px] xl:h-[250px] 2xl:w-[220px] 2xl:h-[275px] 3xl:w-[257px] 3xl:h-[302px]'>
          <Image src='/egg.webp' alt='animated shiba' fill loading='lazy' />
        </div>
      </div>
      <div className='absolute bottom-0 left-[180px] lg:left-[320px] xl:left-[390px] 2xl:left-[451px] 3xl:left-[481px] z-10'>
        <div className='relative w-[107px] h-[180px] lg:w-[175px] lg:h-[290px] 2xl:w-[195px] 2xl:h-[325px] 3xl:w-[220px] 3xl:h-[370px]'>
          <Image
            src='/images/shiba-baby-egg.webp'
            layout='fill'
            objectFit='cover'
            alt=''
            loading='lazy'
          />
        </div>
      </div>
      <div className='absolute bottom-5 lg:bottom-[4.5rem] left-[300px] lg:left-[500px] xl:left-[600px] 2xl:left-[690px] 3xl:left-[742px] z-10'>
        <div className='relative w-[60px] h-[70px] lg:w-[96px] lg:h-[112px]'>
          <Image src='/egg.webp' alt='animated shiba' fill loading='lazy' />
        </div>
      </div>
      <div className='absolute -right-20 lg:-right-[120px] bottom-[70px] lg:bottom-0 z-0'>
        <Boat />
      </div>
      <div className='absolute lg:right-[390px] xl:right-[440px] 2xl:right-[490px] 3xl:right-[520px] lg:bottom-[200px] xl:bottom-[240px] 2xl:bottom-[260px] 3xl:bottom-[270px] hidden lg:block'>
        <Mashroom className='w-[60px] h-[70px] lg:w-[88px] lg:h-[112px]' />
      </div>
      <div className='absolute -right-[60px] xl:right-10 lg:right-20 2xl:-right-20 3xl:-right-20 bottom-[130px] lg:bottom-[260px] scale-x-[-1]  z-50'>
        <div className='size-[324px] lg:size-[490px] xl:size-[570px] 2xl:size-[650px] 3xl:size-[720px]'>
          <AboutVideo1 />
        </div>
      </div>
      <div className='absolute bottom-[140px] right-[40px] lg:bottom-[165px] lg:right-[160px] xl:bottom-[180px] xl:right-[200px] 2xl:bottom-[200px] 2xl:right-[240px]'>
        <Ball />
      </div>
    </>
  );
};
