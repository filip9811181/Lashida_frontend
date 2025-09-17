'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { useAccount } from 'wagmi';
import { disconnect } from '@wagmi/core';

import { wagmiConfig, web3Modal } from '@/app/providers';
import { Lashiba } from '@/components/lashiba';
import { cn } from '@/lib/utils';
import { shortenAddress } from '@/utils';

import { HEADER_LINKS } from '../header/constants';
import { BeachBall } from '../hero/beach-ball';
import FaqLogo from './faq-logo';
import FaqLogoMobile from './faq-logo-mobile';
import Telegram from './telegram';
import X from './x';
import Youtube from './youtube';

const Faq = () => {
  const { address, isConnected } = useAccount();

  const handleScroll = (
    href: string
  ) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleConnectWallet = () => {
    if (address && isConnected) {
      disconnect(wagmiConfig);
    } else {
      web3Modal.open();
    }
  };

  return (
    <section className='flex justify-center w-full h-full lg:min-h-[1300px] relative pb-[30px] bg-dust'>
      <div className='w-full max-w-[1920px] h-full relative flex flex-col items-center'>
        <div className='absolute max-lg:top-[-174px] flex justify-center items-start w-full'>
          <FaqLogo className='hidden lg:block relative top-[-200px] 2xl:top-[-260px]' />

          <FaqLogoMobile className='lg:hidden relative top-[-250px] sm:top-[-200px] md:top-[-200px]' />

          <Image
            className='hidden lg:block absolute left-[20px] top-[150px] 2xl:top-[130px]'
            src={'/images/faq-img.png'}
            alt=''
            width={123}
            height={137}
            loading='lazy'
          />

          <BeachBall className='hidden lg:block absolute left-[180px] top-[150px] 2xl:top-[70px] w-[214px] h-[213px]' />

          <Image
            className='hidden lg:block 2xl:max-w-[287px] 2xl:mt-[-194px] w-full h-auto max-w-[187px]'
            src={'/images/faq-skelet.webp'}
            alt='skelet image'
            width={1000}
            height={1000}
            loading='lazy'
          />

          <Image
            className='absolute top-[190px] right-[142px] sm:right-[70px] md:top-[-50px] lg:hidden max-w-[117px] max-h-[199px] md:max-w-[187px] md:max-h-[291px]'
            src={'/images/faq-skelet.webp'}
            alt='skelet image'
            width={287}
            height={491}
            loading='lazy'
          />

          <Image
            className='absolute  right-[27px] top-[70px] sm:top-[200px] lg:hidden w-[99px] h-[185px]'
            src={'/images/faq-shiba.webp'}
            alt='skelet image'
            width={287}
            height={491}
            loading='lazy'
          />
          <Image
            className='relative z-[90] top-[-300px] hidden lg:block'
            src={'/images/footer.png'}
            alt='shibas image'
            width={833}
            height={706}
            loading='lazy'
          />

          <div className='absolute hidden lg:block bottom-[250px] 2xl:bottom-[500px] right-[-250px] rotate-[15deg]'>
            <div className='relative w-[700px] h-[500px] xl:w-[1032px] xl:h-[834px]'>
              <Image src='/parasol.webp' alt='animated shiba' fill loading='lazy' />
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center gap-[50px] w-full pt-[250px] lg:pt-[430px] xl:pt-[370px] 2xl:pt-[350px]'>
          <div className='flex items-center gap-[26px]'>
            <div className='relative w-[65px] h-[83px] ml-10 '>
              <Image src='/images/lashiba-face.webp' alt='animated shiba' fill loading='lazy' />
            </div>
            <Lashiba className='relative w-[154px] h-[41px]' />
          </div>

          <nav className='flex items-center gap-[17px] sm:gap-[26px] lg:gap-[73px]'>
            {HEADER_LINKS.map(({ href, title }, i) => {
              return (
                <Link
                  key={i}
                  className={cn(
                    'text-[20px] md:text-[24px] text-foreground font-patrick font-normal leading-[54%] tracking-[0%]',
                  )}
                  href={href}
                >
                  <span
                    className={cn(
                      'text-[20px] md:text-[24px] text-foreground font-patrick font-normal leading-[54%] tracking-[0%]',
                    )}
                  >
                    {title}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className='flex justify-center items-center gap-[24px] w-full'>
            <button className='w-[161px] h-[64px] sm:w-[181px] sm:h-[72px] md:w-[289px] md:h-[117px] bg-[url("/images/green-button.webp")] bg-contain bg-no-repeat text-[21px] md:text-[36px] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%]' onClick={() => handleScroll('home')}>
              bUY $laShiba Inu
            </button>
            <button className='w-[161px] h-[64px] sm:w-[181px] sm:h-[72px] md:w-[289px] md:h-[117px] bg-[url("/images/pink-button.webp")] bg-contain bg-no-repeat text-[21px] md:text-[36px] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%]' onClick={handleConnectWallet}>
              {address && isConnected
                ? shortenAddress(address)
                : "Connect Wallet"}
            </button>
          </div>

          <div className='flex items-center gap-[20px] sm:gap-[37px]'>
            <p className='text-black text-[26px] md:text-[32px] font-britti font-semibold leading-[150%] tracking-[0%]'>
              Join us
            </p>
            <div className='flex items-center gap-[26px]'>
              <Youtube />
              <Telegram />
              <X />
            </div>
          </div>

          <p className='text-black text-[20px] md:text-[24px] font-britti font-semibold leading-[150%] tracking-[0%] px-[20px] lg:px-0'>
            Powering Next Gen Crypto © JetBolt Copyright 2024 All Rights Reserved
          </p>

          <div className='flex flex-col gap-[30px] w-full lg:max-w-[1406px] px-[20px]'>
            <p className='text-[#00000099] text-[16px] font-britti font-light leading-[150%] tracking-[0%]'>
              Disclaimer: By visiting this website, using our services, or buying JetBolt, you agree
              to our Terms of Service and Privacy Policy. You also warrant that you have read and
              fully understood the Disclaimer about the risks of purchasing cryptocurrencies like
              JetBolt. By completing a purchase, you also declare that you are not a citizen or
              resident of any banned country, or any other country where the purchase of JetBolt may
              be prohibited by law. A complete list of banned countries is available here. Our list
              of blocked countries and terms of service may be subject to updates, so please check
              the latest version.
            </p>

            <p className='text-[#00000099] text-[16px] font-britti font-light leading-[150%] tracking-[0%]'>
              JetBolt is not an investment; it is created as an experimental new cryptocurrency.
              JetBolt tokens are not currently resellable. They are only usable as an ecosystem
              asset. There is no guarantee they will ever be resellable or tradable on any market.
              We do not guarantee or represent that JetBolt holds any intrinsic value, that it will
              increase in price after the presale, or that it will have any value after the presale.
              We make no representations or warranties regarding JetBolt and are not liable for any
              losses or errors that may occur during its use. All users should exercise caution and
              buy JetBolt entirely at their own risk.
            </p>

            <p className='text-[#00000099] text-[16px] font-britti font-light leading-[150%] tracking-[0%]'>
              By using the JetBolt platform and product, you accept it &quot;as is&quot;,
              acknowledging that we may not update, enhance, or maintain it regularly. The services
              and interface may be unavailable or discontinued at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
