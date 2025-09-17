import React from 'react';

import Image from 'next/image';

const ShockedAnimation = () => {
  return (
    <div className='w-[400px] h-[400px] sm:w-[629px] sm:h-[623px] md:w-[709px] md:h-[624px] relative top-[50px] left-[-23px] flex justify-center items-center'>
      <Image
        src={'/images/tokenomics-shocked-animation-bg.webp'}
        alt=''
        fill
        sizes='100vw'
        className='object-cover'
        loading='lazy'
      />

      <Image
        className='w-auto md:w-[530px] h-auto md:h-[500px] relative left-[20px] top-[-10px]'
        src={'/animations/tokenomics-shocked-animation.gif'}
        alt=''
        loading='lazy'
        width={630}
        height={612}
      />
    </div>
  );
};

export default ShockedAnimation;
