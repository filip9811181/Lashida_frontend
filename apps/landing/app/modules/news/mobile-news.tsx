import React from 'react';

import Image from 'next/image';

export const MobileNews = () => {
  return (
    <div className='lg:hidden px-10 mt-[50px] flex flex-col items-center relative'>
      <Image
        src='/images/coffee-stain.webp'
        width={160}
        height={183}
        alt=''
        className='absolute bottom-[800px] -left-[60px] mix-blend-multiply'
        loading='lazy'
      />
      <Image
        src='/images/coffee-stain.webp'
        width={160}
        height={183}
        alt=''
        className='absolute bottom-[540px] -right-[60px] mix-blend-multiply -rotate-[190deg] opacity-30'
        loading='lazy'
      />
      <p className='font-baskervville text-[40px] leading-[120%] font-normal text-center mb-[42px]'>
        VIRAL MEME COIN LEPEPE TAKING OVER THE WORLD
      </p>
      <p className='font-inter text-lg font-normal text-center mb-5'>
        LaShiba Inu is a next-generation memecoin project inspired by the mischievous spirit of
        Labubu and the viral power of Pepe. Designed for the internet age, LaShiba Inu blends
        playful branding, strong community energy and simple engaging utility all wrapped in a
        character that’s impossible to ignore.
        <br />
        <br />
        At its core, LaShiba Inu is about bringing people together through memes, good vibes and
        smart tokenomics. With a built-in play-to-earn game, community-led growth and a bold,
        recognizable identity, LaShiba Inu isn’t just riding the meme wave, it’s helping shape where
        it goes next. Backed by a loyal community and built for long-term fun, LaShiba Inu is here
        to shake up the space with something that feels fresh, accessible and genuinely entertaining
      </p>
      <button className='w-[236px] h-[94px] bg-[url("/images/grey-button.webp")] bg-cover bg-no-repeat text-[27px] text-white font-nerko font-normal text_stroke_1 hover:opacity-50 mb-[54px]'>
        Whitepaper
      </button>
      <div className='h-[9px] w-full bg-black rounded-full mb-[42px]' />
      <p className='font-inter text-lg font-normal text-center mb-3'>
        In a baffling turn of events, the mysterious LaShiba Inu ; a rogue memecoin with a frog’s
        grin, is causing waves across digital and real-world realms alike. From dustys creens
        insleepy towns to the buzzing underground channels of degens worldwide, LaShiba’s Inu
        digital footprints coincide with sudden surges of excitement, dopamine spikes and
        inexplicable market jumps. In the world of LaShiba Inu, the only rule is: meme or be memed.
      </p>
      <Image
        src='/images/news-lashiba-mobile.webp'
        width={151}
        height={233}
        alt=''
        loading='lazy'
      />
      <div className='h-[9px] w-full bg-black rounded-full mb-[74px]' />
      <Image src='/images/news-lashiba-2.webp' width={184} height={241} alt='' loading='lazy' />
      <div className='h-[9px] w-full bg-black rounded-full mb-[6px]' />
      <p className='font-baskervville text-[70px] leading-[100%] mb-[10px]'>WANTED</p>
      <p className='font-inter text-lg leading-[100%] font-normal text-center mb-11'>
        <span className='font-bold'>Name:</span> LaShiba Inu
        <br />
        <br />
        <span className='font-bold'>Species:</span> Mischievous Shiba-Doll Hybrid
        <br />
        <br />
        <span className='font-bold'>Crimes:</span> Meme manipulation, vault-raiding, going viral
        without license
        <br />
        <br />
        <span className='font-bold'>Known Aliases:</span> “The Memelectable,” “Shibubu,” “The Swamp
        Phantom”
        <br />
        <br />
        <span className='font-bold'>Reward:</span> 1,000,000 LaShiba Inu for verified sightings
        on-chain
        <br />
        <br />
        <span className='font-bold'>Last Seen:</span> Dancing on the $8M presale ceiling
      </p>
    </div>
  );
};
