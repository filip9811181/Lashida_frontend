'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { GLASSES_VARIANTS, HAT_VARIANTS, OUTFIT_VARIANTS, SHIBAS_VARIANTS } from './constants';
import { FurButton } from './fur-button';
import { GlassesButton } from './glasses-button';
import { HatButton } from './hat-button';
import { OutfitButton } from './outfit-right';

const DressShiba = () => {
  const [shibaIndex, setShibaIndex] = useState(0);
  const [glessesIndex, setGlessesIndex] = useState(0);
  const [outfitIndex, setOutfitIndex] = useState(0);
  const [hatIndex, setHatIndex] = useState(0);

  const handleNextHat = () => {
    setHatIndex(prevIndex => (prevIndex + 1) % HAT_VARIANTS.length);
  };

  const handlePrevHat = () => {
    setHatIndex(prevIndex => (prevIndex === 0 ? HAT_VARIANTS.length - 1 : prevIndex - 1));
  };

  const handleNextOutfit = () => {
    setOutfitIndex(prevIndex => (prevIndex + 1) % OUTFIT_VARIANTS.length);
  };

  const handlePrevOutfit = () => {
    setOutfitIndex(prevIndex => (prevIndex === 0 ? OUTFIT_VARIANTS.length - 1 : prevIndex - 1));
  };

  const handleNextGlasses = () => {
    setGlessesIndex(prevIndex => (prevIndex + 1) % GLASSES_VARIANTS.length);
  };

  const handlePrevGlasses = () => {
    setGlessesIndex(prevIndex => (prevIndex === 0 ? GLASSES_VARIANTS.length - 1 : prevIndex - 1));
  };

  const handleNextShiba = () => {
    setShibaIndex(prevIndex => (prevIndex + 1) % SHIBAS_VARIANTS.length);
  };

  const handlePrevShiba = () => {
    setShibaIndex(prevIndex => (prevIndex === 0 ? SHIBAS_VARIANTS.length - 1 : prevIndex - 1));
  };

  const handleRandomize = () => {
    setShibaIndex(Math.floor(Math.random() * SHIBAS_VARIANTS.length));
    setGlessesIndex(Math.floor(Math.random() * GLASSES_VARIANTS.length));
    setOutfitIndex(Math.floor(Math.random() * OUTFIT_VARIANTS.length));
    setHatIndex(Math.floor(Math.random() * HAT_VARIANTS.length));
  };

  return (
    <div className='flex flex-col justify-center items-center gap-[10px] w-full'>
      <div className='flex justify-center items-center gap-[0px] w-full px-[30px] md:px-0 relative'>
        <div className='flex flex-col items-end gap-[20px] relative left-[70px] 2xl:left-0 z-10'>
          <HatButton onClick={handlePrevHat} />
          <div className='mr-[50px]'>
            <GlassesButton onClick={handlePrevGlasses} />
          </div>
          <div className='mr-[50px]'>
            <OutfitButton onClick={handlePrevOutfit} />
          </div>
          <FurButton onClick={handlePrevShiba} />
        </div>

        <div className='flex justify-center items-center w-full lg:w-[692px] h-auto lg:h-[663px] relative '>
          {HAT_VARIANTS[hatIndex] !== 'empty' ? (
            <Image
              className='absolute'
              src={HAT_VARIANTS[hatIndex] as string}
              alt=''
              width={682}
              height={663}
              loading='lazy'
            />
          ) : null}
          {GLASSES_VARIANTS[glessesIndex] !== 'empty' ? (
            <Image
              className='absolute'
              src={GLASSES_VARIANTS[glessesIndex] as string}
              alt=''
              width={682}
              height={663}
              loading='lazy'
            />
          ) : null}
          {OUTFIT_VARIANTS[outfitIndex] !== 'empty' ? (
            <Image
              className='absolute'
              src={OUTFIT_VARIANTS[outfitIndex] as string}
              alt=''
              width={682}
              height={663}
              loading='lazy'
            />
          ) : null}
          <Image
            className='min-h-[200px] min-w-[300px]'
            src={SHIBAS_VARIANTS[shibaIndex] as string}
            alt=''
            width={682}
            height={663}
            loading='lazy'
          />
        </div>

        <div className='flex flex-col items-start gap-[20px] relative right-[70px] 2xl:right-0 z-10'>
          <HatButton direction='right' onClick={handleNextHat} />
          <div className='ml-[50px]'>
            <GlassesButton direction='right' onClick={handleNextGlasses} />
          </div>
          <div className='ml-[50px]'>
            <OutfitButton direction='right' onClick={handleNextOutfit} />
          </div>
          <FurButton direction='right' onClick={handleNextShiba} />
        </div>
      </div>

      <button
        onClick={handleRandomize}
        className='bg-[url("/images/pink-button.webp")] bg-cover bg-no-repeat w-[141px] lg:w-[308px] h-[56px] lg:h-[123px] flex justify-center items-center hover:opacity-50 active:scale-[90%]'
      >
        <p className='text-white text-[16px] lg:text-[36px] text-stroke font-nerko leading-[72%] tracking-[0%]'>
          Randomize
        </p>
      </button>
    </div>
  );
};

export default DressShiba;
