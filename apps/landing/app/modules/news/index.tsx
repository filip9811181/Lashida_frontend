import React from 'react';

import Image from 'next/image';

import { Skeleton } from '../about/skeleton';
import { DesktopNews } from './desktop-news';
import { MobileNews } from './mobile-news';

const News = () => {
  return (
    <div className='relative w-full -mt-1 flex flex-col items-center z-[2] '>
      <Image
        src='/images/news-paper-bg.webp'
        alt={`Background `}
        fill
        priority={true}
        sizes='100vw'
        className='object-cover lg:object-fill'
      />
      <div className='w-full max-w-[1920px] h-full relative flex flex-col items-center pb-[270px] lg:pb-0 '>
        <>
          <Image
            src='/images/coffee-stain.webp'
            width={523}
            height={699}
            alt=''
            className='absolute bottom-[0px] -left-[120px] mix-blend-multiply hidden lg:block z-10'
            loading='lazy'
          />
          <section className='w-full h-auto  bg-cover bg-no-repeat relative lg:px-[60px] 2xl:px-[110px]  z-0 flex flex-col items-center lg:pt-[167px] pb-[100px] lg:pb-[206px]'>
            <div className='absolute top-[-180px] right-0 hidden lg:block'>
              <Skeleton className='lg:w-[320px] lg:h-[545px]' />
            </div>

            <div className='h-[9px] w-full bg-black lg:hidden' />
            <div className='bg-[url("/images/news-bg-mobile.webp")] lg:bg-[url("/images/news-bg-desktop.webp")] bg-no-repeat bg-cover  flex flex-col lg:gap-5'>
              <div className='flex flex-col px-10'>
                <h2 className='text-[72px] leading-[90%] lg:leading-[100%] lg:text-[110px] xl:text-[140px] 2xl:text-[160px] 3xl:text-[214px] font-baskervville text-center pt-[37px] lg:pt-[80px] mb-[10px] lg:mb-0'>
                  CRYPTO NEWS
                </h2>
                <p className='lg:hidden text-[28px] font-baskervville text-center mb-[10px]'>
                  Monday 2025.
                </p>
                <div className='h-[9px] w-full bg-black rounded-full' />
              </div>
              <DesktopNews />
              <MobileNews />
            </div>
          </section>
        </>
      </div>
    </div>
  );
};

export default News;
