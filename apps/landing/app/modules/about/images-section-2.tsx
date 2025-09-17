import React from 'react';

import { FlyAgaric } from './fly-agaric';
import { Mashroom2 } from './mashroom-2';
import { Skeleton } from './skeleton';
import { AboutVideo2 } from './video2';

export const ImagesSection2 = () => {
  return (
    <>
      <div className='-left-10 lg:left-1/2 lg:-translate-x-1/2 2xl:translate-x-0 2xl:left-[17px] bottom-0 2xl:bottom-10 3xl:-bottom-[120px] absolute z-30'>
        <div className='relative w-[393px] h-[470px]  lg:w-[600px] lg:h-[600px] 3xl:w-[890px] 3xl:h-[890px] '>
          <AboutVideo2 />
        </div>
      </div>
      <div className='absolute -right-10 lg:-left-[48px] bottom-[100px] lg:bottom-[120px] -rotate-[10deg]'>
        <FlyAgaric />
      </div>
      <div className='absolute bottom-0 right-5 z-[40] lg:hidden'>
        <Skeleton />
      </div>
      <div className='absolute  lg:right-0 bottom-[110px] hidden lg:block 2xl:hidden'>
        <Mashroom2 />
      </div>
      <div className='absolute left-0 bottom-[110px] lg:hidden '>
        <Mashroom2 />
      </div>
    </>
  );
};
