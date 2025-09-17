
'use client'
import React, { useState } from 'react';

import Image from 'next/image';

import { Duck } from '../hero/duck';
import Accordion from './accordion';
import RoadmapCard from './card';
import { ACCORDION_DATA, CARDS_DATA } from './constants';
import Saturn from './saturn';

const Roadmap = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <Image
        src='/images/roadmap-bg.webp'
        alt={`Background`}
        fill
        sizes='100vw'
        className='object-cover lg:object-fill'
        loading='lazy'
      />
      <section className='w-full h-[3700px] sm:h-[4100px] md:h-[3300px] lg:h-[3000px]  xl:h-[4400px] 2xl:h-[4600px] flex flex-col items-center gap-0 md:gap-[50px] pt-[180px] lg:pt-[40px] relative overflow-hidden'>
        <Image
          className='w-[213px] h-[205px] md:w-[500px] md:h-[450px] xl:w-[603px] xl:h-[564px] 2xl:w-[803px] 2xl:h-[764px] absolute right-[-42px] sm:right-0 lg:right-[-44px] top-[863px] sm:top-[1200px] md:top-[236px] z-[300] md:z-[1] xl:z-0'
          src={'/images/shibas-dragon.webp'}
          alt=''
          width={803}
          height={764}
          loading='lazy'
        />

        <div className='hidden lg:block absolute left-[-200px] top-0 w-[150px] h-[100px] md:w-[100px] lg:h-[235px] xl:w-[645px] xl:h-[645px]'>
          <div className='relative w-full h-full'>
            <Image
              src={'/images/roadmap-moon.webp'}
              alt=''
              width={445}
              height={445}
              loading='lazy'
            />
          </div>
        </div>

        <Saturn className='absolute left-[45px] md:left-[400px] top-[571px] md:top-[250px] w-[150px] h-[100px] md:w-[100px] lg:h-[110px] xl:w-[313px] xl:h-[168px] ' />

        <Image
          className='absolute top-0 lg:hidden  w-[235px] h-[235px]'
          src={'/images/moon-mobile.webp'}
          alt=''
          width={235}
          height={235}
          loading='lazy'
        />

        <Image
          className='absolute z-10 right-0 top-[350px] md:left-[50px] xl:left-0 2xl:left-[100px] md:top-[300px] xl:top-[600px] w-[150px] h-[194px] md:w-[200px] md:h-[250px] xl:w-[233px] xl:h-[295px] 2xl:w-[373px] 2xl:h-[495px] xl:z-0'
          src={'/images/roadmap-skelet.webp'}
          alt=''
          width={373}
          height={495}
          loading='lazy'
        />

        <div className='absolute left-0 top-[100px] xl:top-[1070px] w-[240px] xl:w-[265px] h-[265px]'>
          <div className='relative w-full h-full'>
            <Image
              src={'/images/roadmap-planet.png'}
              alt=''
              width={265}
              height={265}
              loading='lazy'
            />
          </div>
        </div>

        <Image
          className='absolute left-0 top-[1600px] sm:top-[2100px] md:top-[650px] xl:top-[1500px] w-[202px] md:w-[250px] xl:w-[457px] h-[134px] md:h-[130px] xl:h-[246px]'
          src={'/images/roadmap-cloud-left-1.webp'}
          alt=''
          width={457}
          height={246}
          loading='lazy'
        />

        <Image
          className='absolute right-[20px] md:right-[200px] lg:right-[50px] 2xl:right-[300px] top-[1700px] sm:top-[2100px] z-[150] md:top-[1100px] lg:top-[900px] xl:top-[1381px] w-[247px] xl:w-[746px] h-[205px] xl:h-[618px]'
          src={'/images/roadmap-airplane.webp'}
          alt=''
          width={746}
          height={618}
          loading='lazy'
        />

        <Image
          className='absolute left-0 top-[2100px] sm:top-[2500px] md:top-[1300px] xl:top-[2500px] w-[107px] md:w-[200px] xl:w-[325px] h-[71px] md:h-[90px] xl:h-[190px]'
          src={'/images/roadmap-cloud-left-2.webp'}
          alt=''
          width={325}
          height={190}
          loading='lazy'
        />

        <Image
          className='absolute right-0 md:right-0 top-[1700px] sm:top-[2300px] md:top-[770px] xl:top-[1370px] w-[155px] md:w-[232px] xl:w-[432px] h-[103px] md:h-[130px] xl:h-[255px]'
          src={'/images/roadmap-cloud-right-1.webp'}
          alt=''
          width={432}
          height={255}
          loading='lazy'
        />

        <Image
          className='absolute hidden right-0 top-[2000px] sm:top-[2500px] md:top-[1400px] xl:top-[2370px] w-[107px] md:w-[200px] xl:w-[419px] h-[71px] md:h-[90px] xl:h-[218px]'
          src={'/images/roadmap-cloud-right-2.webp'}
          alt=''
          width={419}
          height={218}
          loading='lazy'
        />

        <Image
          className='relative z-[300] top-[-10px] lg:top-0 lg:left-[-90px]'
          src={'/images/roadmap-logo.webp'}
          alt='logo'
          width={751}
          height={233}
          loading='lazy'
        />

        <div className='flex justify-center h-auto relative'>
          <Image
            className='hidden md:block w-full xl:w-[1200px] xl:h-[2333px]'
            src={'/images/roadmap-cards.webp'}
            alt=''
            width={1200}
            height={2333}
            loading='lazy'
          />

          <div className='md:hidden w-full h-auto flex flex-col items-center sm:gap-[30px] relative top-[-30px]'>
            {CARDS_DATA.map((card, i) => (
              <RoadmapCard key={i} {...card} />
            ))}
          </div>
          <Image src={'/images/Group 1597885114.png'} className='max-w-[401px] hidden lg:block h-auto w-full absolute bottom-[-500px]     xl:bottom-[440px] left-[166px]' width={1000} height={1000} alt='' />

          <Image
            className='absolute w-[218px] h-[332px] md:w-[320px] md:h-[400px] lg:w-[468px]lg: lg:h-[610px] xl:w-[828px] xl:h-[1262px] bottom-[-500px] sm:bottom-[-450px] md:bottom-[-150px] lg:bottom-[-250px] xl:bottom-[-585px] left-[-128px]'
            src={'/images/roadmap-shiba-parashute.webp'}
            alt=''
            width={828}
            height={1262}
            loading='lazy'
          />

          <div className='hidden lg:block absolute left-[-100px] bottom-[640px] rotate-[17deg]'>
            <Duck className='w-[121px] h-[114px]' />
          </div>
        </div>

        <div  className='flex flex-col xl:flex-row justify-between items-start w-full relative pt-[700px] md:pt-[200px] xl:pt-[700px] lg:pl-[100px]'>
          <div id='faq' className='w-full pt-5 flex flex-col items-center gap-[14px] relative z-[100] px-[20px] lg:px-0 lg:max-w-[1108px]'>
            <Image
              className='lg:hidden absolute top-[-140px]'
              src={'/images/roadmap-mobile-shibas.webp'}
              alt=''
              width={301}
              height={143}
              loading='lazy'
            />
            {ACCORDION_DATA.map((acc, i) => (
              <Accordion
                key={i}
                {...acc}
                isActive={activeIndex === i}
                onToggle={() => toggleAccordion(i)}
              />
            ))}
          </div>

          <div className='absolute lg:relative right-0 -bottom-[700px] md:-bottom-[900px] lg:bottom-[220px]'>
            <div className='relative w-[360px] h-[636px] md:w-[460px] md:h-[836px] 2xl:w-[741px] 2xl:h-[1220px]'>
              <Image
                className=''
                src={'/images/roadmap-beast.webp'}
                alt=''
                layout='fill'
                objectFit='cover'
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Roadmap;
