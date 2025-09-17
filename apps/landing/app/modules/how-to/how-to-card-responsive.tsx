'use client';

import { AnimatedMedia } from '@/components/animated-media';
import { ImageBorder } from '@/components/image-border';
import { cn } from '@/lib/utils';

interface HowToCardProps {
  bg: string;
  title: string;
  subtitle1: string;
  content1: string;
  subtitle2: string;
  content2: string;
  bgColor: string;
  video: string;
  animation: string;
  index: number;
  imgWidth: string;
  imgHeight: string;
  bgColorBorder: string;
  className: string;
}

const HowToCardResponsive = ({
  bg,
  title,
  subtitle1,
  content1,
  subtitle2,
  content2,
  bgColor,
  video,
  animation,
  index,
  imgWidth,
  imgHeight,
  bgColorBorder,
  className,
}: HowToCardProps) => {
  return (
    <ImageBorder
      wrapperClassName={cn(
        'sm:w-full  md:w-[420px] h-[630px] 2xl:h-[689px] flex justify-center itens-center relative',
        className,
      )}
      borderImage={bg}
      border='30px solid transparent'
      borderImageSlice={30}
      bgColor={bgColorBorder}
    >
      <div
        className={cn(
          ' w-full h-full flex flex-col items-start gap-[25px] px-[37px] py-[27px] rounded-[33px] border-[4px] border-black overflow-hidden relative',
          bgColor,
        )}
      >
        <h4 className='text-white text-[36px] text-stroke-bold font-nerko leading-[72%] tracking-[0%]'>
          Step {index + 1}
        </h4>

        <h5 className='text-black text-[24px] font-patrick leading-[88%] tracking-[0%]'>{title}</h5>

        <div className=' w-full flex flex-col items-start gap-[15px]'>
          <p className='text-black text-[24px] font-patrick leading-[88%] tracking-[0%]'>
            {subtitle1}
          </p>
          <p className='text-white text-[18px] font-inter font-normal leading-[26px] tracking-[-1%]'>
            {content1}
          </p>
        </div>

        <div className=' w-full flex flex-col items-start gap-[15px] relative z-[1000]'>
          <p className='text-black text-[24px] font-patrick leading-[88%] tracking-[0%]'>
            {subtitle2}
          </p>
          <p className='text-white text-[18px] font-inter font-normal leading-[26px] tracking-[-1%]'>
            {content2}
          </p>
        </div>

        <div className={cn('absolute bottom-[-40px]', imgWidth, imgHeight)}>
          <AnimatedMedia webmSrc={video} gifSrc={animation} alt='' />
        </div>
      </div>
    </ImageBorder>
  );
};

export default HowToCardResponsive;
