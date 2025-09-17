import React from 'react';

interface AnimatedMediaProps {
  gifSrc: string;
  webmSrc?: string;
  alt: string;
}

export const AnimatedMedia = ({ gifSrc, alt }: AnimatedMediaProps) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={gifSrc} alt={alt} loading='lazy' />;
};
