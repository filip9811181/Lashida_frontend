'use client';

import React from 'react';

import { ImageBorder } from '@/components/image-border';
import { Lashiba } from '@/components/lashiba';
import Image from 'next/image';

import { ABOUT_CARDS } from '../about/constants';
import { ImagesSection2 } from '../about/images-section-2';
import { Mashroom } from '../about/mashroom';
import { Shell } from '../about/shell';
import { Duck } from '../hero/duck';

export const AboutSection2 = () => {
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
    <div className='w-full flex flex-col items-center relative z-10 h-full pt-[60px] lg:pt-[150px] 2xl:pt-[292px]'>
      <div className='w-full max-w-[1920px] h-full relative flex flex-col items-center 2xl:items-end pb-[470px] 2xl:pb-0'>
        <ImagesSection2 />
        <div className='relative lg:pl-4 lg:mr-10 xl:mr-[73px]  w-fit'>
          <div className='absolute left-0 -top-10 lg:left-0 lg:-top-[60px] 2xl:-left-[120px] 2xl:-top-[182px]'>
            <Mashroom className='w-[67px] h-[90px] lg:w-[100px] lg:h-[150px] 2xl:w-[218px] 2xl:h-[292px]' />
          </div>
          <div className='absolute -top-4 right-10 lg:-right-[14px] lg:top-[160px] scale-x-[-1] lg:-z-10 '>
            <Mashroom className='w-[34px] h-[48px] lg:w-[73px] lg:h-[104px]' />
          </div>
          <div className='absolute -right-10 top-[360px] scale-x-[-1] hidden lg:block'>
            <Mashroom className='w-[118px] h-[185px]' />
          </div>
          <div className='absolute right-[160px] -top-10 lg:left-[500px] lg:-top-10 -z-10'>
            <Duck className='w-[70px] h-[65px] lg:w-[106px] lg:h-[100px]' />
          </div>
          <div className='absolute right-[80px] -top-[60px]  lg:left-[600px] lg:-top-[90px] -z-10'>
            <Duck className='w-[84px] h-[80px] lg:w-[128px] lg:h-[121px]' />
          </div>
          <div className='absolute top-0 right-0 rotate-[180deg]'>
            <Shell className='w-[62px] h-[58px] lg:w-[140px] lg:h-[132px]' />
          </div>
          <ImageBorder wrapperClassName='hidden lg:block w-full 2xl:w-fit'>
            <div className='h-full w-full border-[7px] border-[#000000] rounded-[50px] bg-[#78A16D] pt-[36px] pb-[44px] flex flex-col items-center gap-10 px-[50px]'>
              <div className='flex flex-row justify-center items-end'>
                <Image
                  loading='lazy'
                  src='/images/lashiba-face.webp'
                  width={147}
                  height={185}
                  alt='lashiba face'
                />
                <div className='flex flex-col gap-1 mr-[11px] ml-[18px] '>
                  <p className='font-patrick font-normal text-[40px] leading-[50%] text-[#FFFFFF] text-right'>
                    what makes
                  </p>
                  <Lashiba className='w-[571px] h-[152px]' />

                  <p className='font-patrick font-normal text-[49px] leading-[54%] text-[#FFFFFF] text-left'>
                    soooo amazing?!
                  </p>
                </div>
                <p className='font-nerko font-normal text-[67px] leading-[70%] text-[#FFFFFF] text_stroke_2_25 pb-[40px]'>
                  Inu
                </p>
              </div>
              <div className='grid grid-cols-2 gap-x-[52px] gap-y-[30px] w-full mt-[10px]'>
                {ABOUT_CARDS.map((i, index) => (
                  <div key={index} className='flex flex-row items-start gap-4 lg:max-w-[444px]'>
                    <svg
                      width='27'
                      height='27'
                      viewBox='0 0 27 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g filter='url(#filter0_d_51_4252)'>
                        <circle cx='11.5' cy='11.5' r='11.5' fill='white' />
                        <circle cx='11.5' cy='11.5' r='10' stroke='black' stroke-width='3' />
                      </g>
                      <defs>
                        <filter
                          id='filter0_d_51_4252'
                          x='0'
                          y='0'
                          width='27'
                          height='27'
                          filterUnits='userSpaceOnUse'
                          color-interpolation-filters='sRGB'
                        >
                          <feFlood flood-opacity='0' result='BackgroundImageFix' />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dx='4' dy='4' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_51_4252'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect1_dropShadow_51_4252'
                            result='shape'
                          />
                        </filter>
                      </defs>
                    </svg>
                    <div className='flex flex-col gap-4 flex-1'>
                      <p className=' font-inter font-black text-[24px]/[24px] text-white'>
                        {i.title}
                      </p>
                      <p className='font-inter font-normal text-lg text-white'>{i.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex justify-center items-center gap-[24px] w-full'>
                <button className='w-[308px] h-[123px] bg-[url("/images/green-button.webp")] bg-cover bg-no-repeat text-[36px] text-white font-nerko font-normal text_stroke_2_25 hover:opacity-50' onClick={()=>handleScroll('home')}>
                  Buy LaShiba Inu
                </button>
                <button className='w-[308px] h-[123px] bg-[url("/images/pink-button.webp")] bg-cover bg-no-repeat text-[36px] text-white font-nerko font-normal text_stroke_2_25 hover:opacity-50'>
                  Highest API
                </button>
              </div>
            </div>
          </ImageBorder>
          <ImageBorder
            wrapperClassName='lg:hidden w-fit'
            borderImage="url('/images/green-border-mobile.svg')"
            border='30px solid transparent'
            borderImageSlice={30}
            className='w-full'
          >
            <div className='h-full w-full border-[2px] border-[#000000] rounded-[15px] bg-[#78A16D] pt-10 pb-[18px] flex flex-col items-center gap-10 px-10'>
              <div className='flex flex-col'>
                <div className='flex flex-row items-end self-center'>
                  <Image
                    src='/images/lashiba-face.webp'
                    width={36}
                    height={46}
                    alt='lashiba face'
                    loading='lazy'
                  />
                  <p className='font-patrick font-normal text-[30px] leading-[54%] text-white pb-[6px]'>
                    what makes
                  </p>
                </div>
                <div className='flex flex-row items-end'>
                  <Lashiba className='w-[194px] h-[52px]' />

                  <p className='font-nerko font-normal text-[40px] leading-[70%] text-[#FFFFFF] text_stroke_1'>
                    Inu
                  </p>
                </div>
                <p className='font-patrick font-normal text-white text-[30px] leading-[54%] ml-5 pt-[13px]'>
                  soooo amazing?!
                </p>
              </div>
              <div className='grid grid-cols-1 gap-10 w-full mt-[10px]'>
                {ABOUT_CARDS.map((i, index) => (
                  <div key={index} className='flex flex-row items-start gap-4 lg:max-w-[444px]'>
                    <svg
                      width='23'
                      height='23'
                      viewBox='0 0 27 27'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g filter='url(#filter0_d_51_4252)'>
                        <circle cx='11.5' cy='11.5' r='11.5' fill='white' />
                        <circle cx='11.5' cy='11.5' r='10' stroke='black' stroke-width='3' />
                      </g>
                      <defs>
                        <filter
                          id='filter0_d_51_4252'
                          x='0'
                          y='0'
                          width='27'
                          height='27'
                          filterUnits='userSpaceOnUse'
                          color-interpolation-filters='sRGB'
                        >
                          <feFlood flood-opacity='0' result='BackgroundImageFix' />
                          <feColorMatrix
                            in='SourceAlpha'
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                            result='hardAlpha'
                          />
                          <feOffset dx='4' dy='4' />
                          <feComposite in2='hardAlpha' operator='out' />
                          <feColorMatrix
                            type='matrix'
                            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'
                          />
                          <feBlend
                            mode='normal'
                            in2='BackgroundImageFix'
                            result='effect1_dropShadow_51_4252'
                          />
                          <feBlend
                            mode='normal'
                            in='SourceGraphic'
                            in2='effect1_dropShadow_51_4252'
                            result='shape'
                          />
                        </filter>
                      </defs>
                    </svg>
                    <div className='flex flex-col gap-4 flex-1'>
                      <p className=' font-inter font-black text-[24px]/[24px] text-white'>
                        {i.title}
                      </p>
                      <p className='font-inter font-normal text-lg text-white'>{i.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className='flex flex-col justify-center items-center gap-[10px] w-full'>
                <button className='w-[216px] h-[86px] bg-[url("/images/green-button.webp")] bg-cover bg-no-repeat text-[25px] text-white font-nerko font-normal text_stroke_1 hover:opacity-50' onClick={() => handleScroll('home')}>
                  Buy LaShiba Inu
                </button>
                <button className='w-[216px] h-[86px] bg-[url("/images/pink-button.webp")] bg-cover bg-no-repeat text-[25px] text-white font-nerko font-normal text_stroke_1 hover:opacity-50' onClick={() => handleScroll('/home')}>
                  Highest API
                </button>
              </div>
            </div>
          </ImageBorder>
        </div>
      </div>
    </div>
  );
};
