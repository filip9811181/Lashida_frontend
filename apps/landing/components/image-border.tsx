  import React, { ReactNode } from 'react';

  import { cn } from '@/lib/utils';

  interface ImageBorderProps {
    border?: string;
    borderImage?: string;
    borderImageSlice?: number;
    className?: string;
    wrapperClassName?: string;
    children: ReactNode;
    bgColor?: string;
  }

  export const ImageBorder = ({
    border = '75px solid transparent',
    borderImage = "url('/images/green-border.svg')",
    borderImageSlice = 75,
    className = 'w-full h-full',
    wrapperClassName = 'w-full h-full',
    children,
    bgColor = 'bg-[#E1F885]',
  }: ImageBorderProps) => {
    return (
      <div
        className={cn(wrapperClassName)}
        style={{
          border,
          borderImage: borderImage,
          borderImageSlice: borderImageSlice,
        }}
      >
        <div className={cn(className, bgColor)}>{children}</div>
      </div>
    );
  };

  // import React, { ReactNode } from 'react';

  // import { cn } from '@/lib/utils';

  // interface ImageBorderProps {
  //   border?: string;
  //   borderImage?: string;
  //   borderImageSlice?: number;
  //   className?: string;
  //   wrapperClassName?: string;
  //   children: ReactNode;
  // }

  // export const ImageBorder = ({
  //   border = '75px solid transparent',
  //   borderImage = "url('/images/green-border.svg')",
  //   borderImageSlice = 75,
  //   className,
  //   wrapperClassName,
  //   children,
  // }: ImageBorderProps) => {
  //   return (
  //     <div
  //       className={cn('w-full h-full ', wrapperClassName)}
  //       style={{
  //         border,
  //         borderImage: borderImage,
  //         borderImageSlice: borderImageSlice,
  //       }}
  //     >
  //       <div className={cn('w-full h-full bg-[#E1F885]', className)}>{children}</div>
  //     </div>
  //   );
  // };
