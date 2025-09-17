'use client';

import React from 'react';

import { AnimatedMedia } from '@/components/animated-media';

const HeroVideo = () => {
  return (
    <AnimatedMedia
      webmSrc='/images/animated-hero-shiba-compressed.webm'
      gifSrc='/images/animated-hero-shiba-compressed.gif'
      alt=''
    />
  );
};

export default HeroVideo;
