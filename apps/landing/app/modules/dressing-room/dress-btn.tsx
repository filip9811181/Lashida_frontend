'use client';

import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type ButtonProps = {
  text: string;
  imageSrc: string | StaticImageData;
  onClick: () => void;
  reverse?: boolean;
  marginRight?: boolean;
  marginLeft?: boolean;
};

const DressBtn: React.FC<ButtonProps> = ({
  text,
  imageSrc,
  onClick,
  reverse = false,
  marginRight = false,
  marginLeft = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `flex ${reverse ? 'justify-start' : 'justify-end'} items-center gap-[10px] w-[60px] md:w-[100px] xl:w-[400px]`,
        { 'mr-[50px]': marginRight },
        { 'ml-[50px]': marginLeft },
      )}
    >
      {reverse ? (
        <>
          <Image
            className='rotate-180 w-[57px] md:w-[80px] xl:w-[125px] h-[57px] md:h-[80px] xl:h-[125px]'
            src={imageSrc}
            alt='btn image'
            width={125}
            height={126}
            loading='lazy'
          />
          <p className='text-white text-[60px] text-stroke-bold font-nerko leading-[72%] tracking-[0%] hidden xl:block'>
            {text}
          </p>
        </>
      ) : (
        <>
          <p className='text-white xl:text-[60px] text_stroke_2 font-nerko leading-[72%] tracking-[0%] hidden xl:block'>
            {text}
          </p>
          <Image
            className='w-[57px] md:w-[80px] xl:w-[125px] h-[57px] md:h-[80px] xl:h-[125px]'
            src={imageSrc}
            alt='btn image'
            width={125}
            height={126}
            loading='lazy'
          />
        </>
      )}
    </button>
  );
};

export default DressBtn;
