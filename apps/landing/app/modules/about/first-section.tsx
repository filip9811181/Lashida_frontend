import React from 'react';

import { DesktopBlock } from './desktop-block';
import { FeatureIn } from './feature-in';
import { Images } from './images';
import { MobileBlock } from './mobile-block';

export const AboutFirstSection = () => {
  return (
    <div id="audit" className='w-full flex flex-col items-center relative z-10 h-full'>
      <div className='w-full max-w-[1920px] h-full relative pb-[420px] flex flex-col items-center px-4'>
        <Images />
        <FeatureIn />
        <DesktopBlock />
        <MobileBlock />
      </div>
    </div>
  );
};
