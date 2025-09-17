import React from 'react';

import Image from 'next/image';

const Shibas = () => {
  return (
    <section className='w-full h-auto overflow-hidden relative z-[10]'>
      {/* <div className='hidden lg:block absolute bg-[#153945] w-full h-[1000px] z-[-1]' /> */}
      {/* <div className='lg:hidden absolute bg-[#030D23] w-full h-[1000px] bottom-0 z-[-1]' /> */}
      <div className='lg:hidden absolute bg-[#030D23] w-full h-[1000px] top-0 z-[-1]' />

      <Image
        className='w-full h-auto hidden lg:block'
        src={'/images/shibas.webp'}
        alt=''
        width={1920}
        height={1200}
        loading='lazy'
      />
      <Image
        className='w-full h-auto lg:hidden'
        src={'/images/shibas-mobile.webp'}
        alt=''
        width={1920}
        height={1200}
        loading='lazy'
      />
    </section>
  );
};

export default Shibas;
