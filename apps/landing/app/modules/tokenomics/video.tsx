'use client';

import React from 'react';

import { AnimatedMedia } from '@/components/animated-media';

export const TokenomicsVideo = () => {
  return (
    <AnimatedMedia
      webmSrc='/images/tokenomics-animation-compressed.webm'
      gifSrc='/images/tokenomics-animation-compressed.gif'
      alt=''
    />
  );
};
