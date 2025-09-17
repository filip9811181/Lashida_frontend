import React from 'react';

interface StrokeTextProps {
  text: string;
  className: string;
}

export const StrokeText = ({ className, text }: StrokeTextProps) => {
  return (
    <p
      className={
        className +
        `text-stroke-[0.125em] before:content-[attr(data-content)] before:text-white before:text-stroke-[0em] before:absolute`
      }
      data-content={text}
    >
      {text}
    </p>
  );
};
