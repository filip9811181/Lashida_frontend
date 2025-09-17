import React from 'react';

import Image from 'next/image';

export const DesktopNews = () => {
  return (
    <div className='hidden lg:flex flex-col gap-1 px-10 pb-4'>
      <div className='h-[9px] w-full bg-black rounded-full' />
      <div className='grid grid-cols-[1.5fr_4fr_3fr]'>
        <div className='flex flex-row'>
          <div className='flex-1 '>
            <Image
              width={124}
              height={400}
              alt=''
              src='/images/news-lashiba.webp'
              className='float-end mt-20'
              loading='lazy'
            />
            <p className='font-inter text-base font-normal break-words'>
              In a baffling turn of events, the mysterious LaShiba Inu; a rogue memecoin with a
              frog’s grin, is causing waves across digital and real-world realms alike. From dusty
              screens in sleepy towns to the buzzing underground channels of degens worldwide,
              LaShiba’s Inu digital footprints coincide with sudden surges of excitement, dopamine
              spikes and inexplicable market jumps. In the world of LaShiba Inu, zthe only rule is:
              meme or be memed.
            </p>
          </div>
          <div className='h-full w-[9px] bg-black rounded-full' />
        </div>

        <div className='flex flex-col items-center justify-between gap-10 px-20 py-10'>
          <div className='flex flex-col items-center gap-6'>
            <p className='lg:text-[38px]/[35px] 2xl:text-[67px]/[61px] font-baskervville font-normal text-center'>
              VIRAL MEME COIN LESHIBA TAKING OVER THE WORLD
            </p>
            <p className='text-center'>
              LaShiba Inu is a next-generation memecoin project inspired by the mischievous spirit
              of Labubu and the viral power of Shiba. Designed for the internet age, LaShiba Inu
              blends playful branding, strong community energy and simple engaging utility all
              wrapped in a character that’s impossible to ignore.
              <br />
              <br />
              At its core, LaShiba Inu is about bringing people together through memes, good vibes
              and smart tokenomics. With a built-in play-to-earn game, community-led growth and a
              bold, recognizable identity, LaShiba Inu isn’t just riding the meme wave, it’s helping
              shape where it goes next.
              <br />
              Backed by a loyal community and built for long-term fun, LaShiba Inu is here to shake
              up the space with something that feels fresh, accessible and genuinely entertaining
            </p>
          </div>
          <button className='lg:w-[230px] 2xl:w-[308px] h-[92px] 2xl:h-[123px] bg-[url("/images/grey-button.webp")] bg-cover bg-no-repeat text-[36px] text-white font-nerko font-normal text_stroke_2_25 hover:opacity-50'>
            Whitepaper
          </button>
        </div>
        <div className='flex flex-row'>
          <div className='h-full w-[9px] bg-black rounded-full' />
          <div className='flex flex-col items-center w-full pt-3 px-9'>
            <Image
              src='/images/news-lashiba-2.webp'
              width={249}
              height={325}
              alt=''
              loading='lazy'
            />
            <div className='h-[9px] w-[calc(100%-20px)] bg-black rounded-full mt-[14px] mb-6' />
            <p className='lg:text-[30px] xl:text-[60px] 2xl:text-[87px] leading-[100%] font-baskervville text-center mb-[14px]'>
              WANTED
            </p>
            <p className='font-inter text-lg leading-[100%] font-normal text-center'>
              <span className='font-bold'>Name:</span> LaShiba Inu
              <br />
              <span className='font-bold'>Species:</span> Mischievous Shiba-Doll Hybrid
              <br />
              <span className='font-bold'>Crimes:</span> Meme manipulation, vault-raiding, going
              viral without license
              <br />
              <span className='font-bold'>Known Aliases:</span> “The Memelectable,” “Shibubu,” “The
              Swamp Phantom”
              <br />
              <span className='font-bold'>Reward:</span> 1,000,000 LaShiba Inu for verified
              sightings on-chain
              <br />
              <span className='font-bold'>Last Seen:</span> Dancing on the $8M presale ceiling
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
