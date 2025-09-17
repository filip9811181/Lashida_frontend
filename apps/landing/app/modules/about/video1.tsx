'use client';

import React from 'react';

import { AnimatedMedia } from '@/components/animated-media';

const AboutVideo1 = () => {
  return (
    <AnimatedMedia
      webmSrc='/images/about-animation-1.webm'
      gifSrc='/images/about-animation-1.gif'
      alt=''
    />
  );
};

export default AboutVideo1;
