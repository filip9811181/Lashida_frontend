import React from 'react';

import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export const FeatureIn = () => {
  return (
    <>
      <Marquee
        gradient={false}       // no fade on edges
        speed={50}             // adjust scrolling speed
        pauseOnHover={true}    // optional: pause when hovered
        loop={0}               // 0 = infinite loop
        className="z-30 pb-[92px] lg:pb-[105px] hidden lg:flex"
      >
        <div className="flex items-center">
          <p className="uppercase text-[#3B4B97] text-2xl font-black font-poppins mr-10">
            Featured in
          </p>

          <Image
            src="/images/crypto-daily.webp"
            height={66}
            width={193}
            alt="crypto daily"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/analytics-insight.webp"
            height={48}
            width={206}
            alt="analytics insight"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/coin-pedia.webp"
            height={32}
            width={140}
            alt="coin pedia"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/crypto-news.webp"
            height={45}
            width={205}
            alt="cryptonews"
            loading="lazy"
            className="mr-10"
          />
        </div>
        <div className="flex items-center">
          <p className="uppercase text-[#3B4B97] text-2xl font-black font-poppins mr-10">
            Featured in
          </p>

          <Image
            src="/images/crypto-daily.webp"
            height={66}
            width={193}
            alt="crypto daily"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/analytics-insight.webp"
            height={48}
            width={206}
            alt="analytics insight"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/coin-pedia.webp"
            height={32}
            width={140}
            alt="coin pedia"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/crypto-news.webp"
            height={45}
            width={205}
            alt="cryptonews"
            loading="lazy"
            className="mr-10"
          />
        </div>
        <div className="flex items-center">
          <p className="uppercase text-[#3B4B97] text-2xl font-black font-poppins mr-10">
            Featured in
          </p>

          <Image
            src="/images/crypto-daily.webp"
            height={66}
            width={193}
            alt="crypto daily"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/analytics-insight.webp"
            height={48}
            width={206}
            alt="analytics insight"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/coin-pedia.webp"
            height={32}
            width={140}
            alt="coin pedia"
            loading="lazy"
            className="mr-10"
          />
          <Image
            src="/images/crypto-news.webp"
            height={45}
            width={205}
            alt="cryptonews"
            loading="lazy"
            className="mr-10"
          />
        </div>
      </Marquee>

      {/* <ul className='animate-image-scroll flex items-center shrink-0 gap-8 pr-8 lg:hidden pb-[92px]'>
        {[
          {
            image: (
              <Image
                src='/images/crypto-daily.webp'
                height={66}
                width={193}
                alt='crypto daily'
                loading='lazy'
              />
            ),
          },
          {
            image: (
              <Image
                src='/images/analytics-insight.webp'
                height={48}
                width={206}
                alt='analytics insight'
                loading='lazy'
              />
            ),
          },
          {
            image: (
              <Image
                src='/images/coin-pedia.webp'
                height={32}
                width={140}
                alt='coin pedia'
                loading='lazy'
              />
            ),
          },
          {
            image: (
              <Image
                src='/images/crypto-news.webp'
                height={45}
                width={205}
                alt='cryptonews'
                loading='lazy'
              />
            ),
          },
        ].map((i, index) => (
          <li className='shrink-0' key={index}>
            {i.image}
          </li>
        ))}
      </ul> */}
    </>
  );
};
