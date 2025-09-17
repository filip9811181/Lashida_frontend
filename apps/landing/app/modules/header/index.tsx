'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useAccount } from 'wagmi';
import { disconnect } from "@wagmi/core";

import { wagmiConfig, web3Modal } from '@/app/providers';
import { Lashiba } from '@/components/lashiba';
import { StrokeText } from '@/components/stroke-text';
import { cn } from '@/lib/utils';

import { ActiveBg } from './active-bg';
import { ButtonBg } from './button-bg';
import { HEADER_LINKS } from './constants';
import { shortenAddress } from '@/utils';

const sections = ['home', 'how-to-buy', 'whitepaper', 'audit', 'faq'];

const Header = () => {
  const pathname = usePathname();
  const { address, isConnected } = useAccount();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const handleScrollEvent = () => {
      let current = 'home';
      for (const id of sections) {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollEvent);
    handleScrollEvent();
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(targetId); // highlight immediately
      setIsMobileMenuOpen(false); // close mobile menu on click
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
    <header className='w-full bg-transparent absolute top-[10px] flex justify-center z-[100]'>
      <div className='w-full max-w-[1500px] flex justify-between items-center px-4 md:px-8 lg:px-4'>
        <div className='lg:hidden' />
        <div className='hidden lg:flex flex-row items-end gap-[26px]'>
          <div className='relative w-[65px] h-[83px]'>
            <Image src='/images/lashiba-face.webp' alt='animated shiba' fill priority={true} />
          </div>
          <div className='flex flex-row items-end gap-2 mb-3'>

            <Lashiba className='w-[154px] h-[41px]' />
            <StrokeText
              // className='text-[40px] font-nerko text-black leading-[72%] content-center font-normal'
              // text='Inu'
              className='text-[22px] lg:text-[32px] font-nerko text-black leading-[72%] font-normal text-stroke-[0.125em] '
              text='Inu'
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className='hidden xl:flex items-center gap-[10px]'>
          <nav className='flex items-center'>
            {HEADER_LINKS.map(({ href, title }, i) => {
              const sectionId = href.replace('#', '');
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={i}
                  href={href}
                  onClick={(e) => handleScroll(e, href)}
                  className={cn('relative mr-10 2xl:mr-[72px]', {
                    'mr-4 2xl:mr-[26px]': isActive,
                  })}
                >
                  {isActive ? (
                    <p
                      className='block text-[28px] font-patrick tracking-[0%] text-stroke-[0.125em] before:content-[attr(data-content)] before:text-[#D6FF00] before:text-stroke-[0em] before:absolute z-10 absolute top-1/2 -translate-y-1/2 w-full text-center'
                      data-content={title}
                    >
                      {title}
                    </p>
                  ) : (
                    <p className='text-[24px] leading-[54%] font-patrick'>{title}</p>
                  )}
                  {isActive && <ActiveBg />}
                </a>
              );
            })}
          </nav>
          <button className='text-[26px] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%] relative' onClick={handleConnectWallet}>
            <div className='absolute top-1/2 -translate-y-1/2 text-center w-full '>
              <StrokeText
                className='text-[26px] text-stroke-[0.125em] font-nerko text-black leading-[72%] font-normal'
                text={address && isConnected ? shortenAddress(address) : 'Connect Wallet'}
              />
            </div>
            <ButtonBg />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className='xl:hidden flex items-center justify-center w-[40px] h-[40px] focus:outline-none'
          onClick={toggleMobileMenu}
          aria-label='Toggle mobile menu'
        >
          {!isMobileMenuOpen ? (
            <svg
              width='48'
              height='34'
              viewBox='0 0 48 34'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <rect
                x='0.829268'
                y='0.829268'
                width='45.6098'
                height='7.46341'
                rx='3.73171'
                fill='white'
                stroke='black'
                strokeWidth='1.65854'
              />
              <rect
                x='0.829268'
                y='13.2683'
                width='45.6098'
                height='7.46341'
                rx='3.73171'
                fill='white'
                stroke='black'
                strokeWidth='1.65854'
              />
              <rect
                x='0.829268'
                y='25.7073'
                width='45.6098'
                height='7.46341'
                rx='3.73171'
                fill='white'
                stroke='black'
                strokeWidth='1.65854'
              />
            </svg>
          ) : null}

          {isMobileMenuOpen ? (
            <svg
              className='w-10 h-10 text-foreground relative z-[9999999]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : null}
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            'xl:hidden absolute top-[-15px] left-0 w-full bg-white shadow-lg z-[999999] transform transition-all duration-500 ease-in-out',
            isMobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0 pointer-events-none'
          )}
        >
          <nav className='flex flex-col items-center gap-4 py-10'>
            {HEADER_LINKS.map(({ href, title }, i) => {
              const isActive = pathname === href;
              return (
                <Link
                  key={i}
                  className={cn(
                    'text-[24px] text-foreground font-patrick font-normal leading-[54%] tracking-[0%]',
                    {
                      'w-[141px] h-[57px] flex justify-center items-center bg-[url("/images/nav-button-bg.png")] bg-cover bg-no-repeat':
                        isActive,
                    },
                  )}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)} // close on click
                >
                  <span
                    className={cn(
                      'text-[24px] text-foreground font-patrick font-normal leading-[54%] tracking-[0%]',
                      {
                        'text-orange text-[28px] text-center leading-[72%] tracking-[0%]':
                          isActive,
                      },
                    )}
                    style={{
                      WebkitTextStroke: isActive ? '2px black' : '',
                      paintOrder: 'stroke',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    {title}
                  </span>
                </Link>
              );
            })}
            <button className='w-[222px] h-[88px] bg-[url("/images/pink-button.webp")] bg-cover bg-no-repeat text-[26px] text-white font-nerko font-normal text-stroke hover:opacity-50 active:scale-[90%]' onClick={handleConnectWallet}>
              {address && isConnected
                ? shortenAddress(address)
                : "Connect Wallet"}
            </button>
          </nav>
        </div>

      </div>
    </header>
  );
};

export default Header;
