'use client';

import React, { useEffect, useState } from 'react';

import { TimerSvg } from './timer-svg';

const Timer = () => {
  const [days, setDays] = useState(9);
  const [hours, setHours] = useState(14);
  const [minutes, setMinutes] = useState(6);
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else if (hours > 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (days > 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className='flex items-center relative justify-center'>
      <div className='relative'>
        <TimerSvg />
        <p className='text-white text-[39px] xl:text-[60px] font-flick font-bold leading-[100%] tracking-[0%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-stroke-1-black lg:text-stroke-2-black'>
          {formatNumber(days)}
        </p>
      </div>
      <div className='h-[60px] lg:h-[90px] relative z-10'>
        <p className='text-white text-[39px] xl:text-[60px] font-flick font-bold leading-[100%] tracking-[0%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-stroke-1-black lg:text-stroke-2-black'>
          :
        </p>
      </div>
      <div className='relative'>
        <TimerSvg />
        <p className='text-white text-[39px] xl:text-[60px] font-flick font-bold leading-[100%] tracking-[0%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-stroke-1-black lg:text-stroke-2-black'>
          {formatNumber(hours)}
        </p>
      </div>
      <div className='h-[60px] lg:h-[90px] relative z-10'>
        <p className='text-white text-[39px] xl:text-[60px] font-flick font-bold leading-[100%] tracking-[0%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-stroke-1-black lg:text-stroke-2-black'>
          :
        </p>
      </div>
      <div className='relative'>
        <TimerSvg />
        <p className='text-white text-[39px] xl:text-[60px] font-flick font-bold leading-[100%] tracking-[0%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-stroke-1-black lg:text-stroke-2-black'>
          {formatNumber(minutes)}
        </p>
      </div>
      <div className='h-[60px] lg:h-[90px] relative z-10'>
        <p className='text-white text-[39px] xl:text-[60px] font-flick font-bold leading-[100%] tracking-[0%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-stroke-1-black lg:text-stroke-2-black'>
          :
        </p>
      </div>
      <div className='relative'>
        <TimerSvg />
        <p className='text-white text-[39px] xl:text-[60px] font-flick font-bold leading-[100%] tracking-[0%] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-stroke-1-black lg:text-stroke-2-black'>
          {formatNumber(seconds)}
        </p>
      </div>
    </div>
  );
};

export default Timer;
