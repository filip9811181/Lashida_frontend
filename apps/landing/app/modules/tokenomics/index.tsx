'use client';

import React, { useState } from 'react';

// import { cn } from '@/lib/utils';
import Image from 'next/image';

import Logo from './logo';
import Shiba from './shiba';
import ShockedAnimation from './shoked-animation';
import { TokenomicsVideo } from './video';

const Tokenomics = () => {
  const [isActive, setIsActive] = useState(false);

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
    <>
      <Image
        src='/images/tokenomics-mobile-bg.webp'
        alt={`Background`}
        fill
        sizes='100vw'
        className='object-cover lg:object-fill lg:hidden'
        loading='lazy'
      />
      <Image
        src='/images/tokenomics-bg.webp'
        alt={`Background`}
        fill
        sizes='100vw'
        className='object-cover lg:object-fill hidden lg:block'
        loading='lazy'
      />

      <section className='w-full max-lg:bg-blueGrad h-full lg:h-[1283px] xl:h-[1783px] relative flex justify-center items-center'>
        <div className='absolute bg-[#030D23] w-full h-[1000px] top-0 z-[-1]' />

        <Image
          className='sm:hidden w-full h-auto absolute top-[-18%] rotate-[-3deg] z-[2]'
          src={'/images/tokenomics-header-img-mobile.webp'}
          alt=''
          width={1920}
          height={327}
          loading='lazy'
        />

        <Image
          className='hidden sm:block w-full absolute top-[-4%] md:top-[-7%] lg:top-[-100px] xl:top-[-170px] rotate-[-3deg] z-[2]'
          src={'/images/tokenomics-header-img.webp'}
          alt=''
          width={1920}
          height={327}
          loading='lazy'
        />

        <div className='w-full max-w-[1920px] relative flex justify-center items-center'>
          <div className='hidden lg:block absolute left-[-100px] bottom-[100px] z-[3] size-[720px]'>
            <TokenomicsVideo />
          </div>

          <div className='hidden lg:block absolute right-0 2xl:right-[50px] lg:top-[300px] 2xl:top-0 z-[400]'>
            <Image
              src={'/images/tokenomics-right-img-1.webp'}
              alt=''
              width={1000}
              height={1000}
              className=' max-w-[373px] 2xl:max-w-[571px] h-auto w-full'

              loading='lazy'
            />
            <Image
              className={`absolute left-[-100px] 2xl:left-[-100px] ${isActive ? ' bottom-[256px]' : ' bottom-[306px]'} w-[200px] h-[80px] 2xl:w-[284px] 2xl:h-[114px]`}
              src={'/images/tokenomics-right-img-1-dont.webp'}
              alt=''
              width={373}
              height={661}
              loading='lazy'
            />
          </div>

          {/* <Image
          className='hidden lg:block absolute right-[50px] lg:top-[300px] xl:top-[300px] z-[4]'
            src={'/images/tokenomics-right-img-1.webp'}
            alt=''
            width={373}
            height={661}
            loading='lazy'
          /> */}

          <Image
            className='hidden w-[200px] lg:w-[230px] xl:w-[298px] xl:h-[325px] lg:block absolute right-[10px] 2xl:right-[100px] lg:bottom-[150px] xl:bottom-[120px] z-[5555]'
            src={
              isActive
                ? '/images/tokenomics-apparat-active.png'
                : '/images/click.png'
            }
            alt=''
            width={298}
            height={319}
            onClick={() => setIsActive(!isActive)}
            loading='lazy'
          />

          <div className='flex flex-col items-center gap-[30px] w-full relative z-[10]  mt-[8.5rem] lg:mt-10'>
            <div className='hidden lg:flex flex-col items-center gap-[15px]'>
              <Logo />
              <p className='text-white text-[36px] font-patrick leading-[54%] tracking-[0%]'>
                Only light can show the truth inside
              </p>
            </div>
            <Image src={'/borderB.png'} className='max-w-full h-auto w-full absolute bottom-[55%] z-[-1] lg:hidden' width={1000} height={1000} alt='' />
            {isActive ? <ShockedAnimation /> : <Shiba className='hidden lg:block' />}
            {!isActive ? (
              <Image src={'/Group 1597885774.png'} className='max-w-full lg:hidden h-auto w-full top-8' alt='' width={1000} height={1000} />
            ) : null}
            <div className='flex flex-col items-center gap-[26px] '>
              <div className='lg:hidden pb-[50px] w-[171px] h-[220px] flex items-end  relative z-[55555]'>
                <Image
                  src={
                    isActive
                      ? '/images/tokenomics-apparat-active.png'
                      : '/images/tokenomics-apparat-not-active.png'
                  }
                  alt=''
                  width={153}
                  height={155}
                  onClick={() => setIsActive(!isActive)}
                  loading='lazy'
                />
              </div>
              <p className='text-white text-[55px] lg:text-[36px] text-stroke font-patrick leading-[54%] tracking-[0%]'>
                Ample Liqudity
              </p>
              <p className='text-white text-[14px] lg:text-[20px] max-w-[307px] font-inter font-normal leading-[21px] md:leading-[33px] tracking-[-1%] lg:max-w-[600px] xl2:max-w-[800px] text-center'>
                Brett Token Is The MEMECOIN With Slapability... Bringing You The Slap Heard Around
                The World! Brett Token Is The MEMECOIN With{' '}
              </p>

              <div className='flex justify-center items-center gap-[3px] lg:gap-[24px] w-full'>
                <button className='w-[176px] h-[70px] lg:w-[308px] lg:h-[123px] bg-[url("/images/green-button.webp")] bg-cover bg-no-repeat text-[20px] lg:text-[36px] leading-[22px] lg:leading-[33px] tracking-[-1%] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%]' onClick={() => handleScroll('home')}>
                  BUY $laShiba Inu
                </button>
                <button className='w-[176px] h-[70px] lg:w-[308px] lg:h-[123px] bg-[url("/images/pink-button.webp")] bg-cover bg-no-repeat text-[20px] lg:text-[36px] leading-[22px] lg:leading-[33px] tracking-[-1%] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%]'>
                  Whitepaper
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tokenomics;
