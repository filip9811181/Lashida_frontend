import React from 'react';

import Image from 'next/image';

import { AboutSection2 } from './section-2';

const About2 = () => {
  return (
    <div className='relative w-full overflow-hidden -mt-1 z-[2]'>
      <div className='w-screen h-[131px] bg-[#5D3B24] blur-[20px] z-10 absolute -top-[65px]'></div>
      <Image
        src='/images/background-beach2-2.webp'
        alt={`Background `}
        fill
        sizes='100vw'
        loading='lazy'
        className='object-cover lg:object-fill'
      />
      <AboutSection2 />
    </div>
  );
};

export default About2;
