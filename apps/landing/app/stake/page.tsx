import Image from 'next/image';
import { Lashiba } from '@/components/lashiba';
import Cloud from './components/cloud';
import Paasol from './components/paasol';
import { ChartPanel } from './components/ChartPanel';
import { EstimateRewardsForm } from './components/EstimateRewardsForm';
import { TotalStakedForm } from './components/TotalStakedForm';
import { StokeForm } from './components/StokeForm';
import { ClaimRewardsForm } from './components/ClaimRewardsForm';

export default function StakePage() {
  return (
    <div
      style={
        {
          background: "url('/images/stake/background.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }
      }
      className="relative min-h-screen overflow-x-hidden">
      <Cloud />
      <Paasol />
      <div className='flex flex-col items-center lg:hidden mt-[40px]'>
        <div className='w-[322px]'>
          <div className='relative w-[65px] h-[83px] ml-10 '>
            <Image
              src='/images/lashiba-face.webp'
              alt='animated shiba'
              fill
              loading='lazy'
            />
          </div>
          <Lashiba className='relative w-[322px] h-[86px] lg:w-[400px] lg:h-[120px] xl:w-[500px] xl:h-[180px] 2xl:w-[809px] 2xl:h-[216px] mt-[-12px]' />
        </div>
      </div>

      <div className="mx-[62px] lg:mx-[146px] mt-[48px] lg:mt-[112px]">
        <div className='flex lg:flex-row flex-col lg:items-end w-full items-center lg:items-none'>
          <Image
            className='w-[444px] h-[125px] hidden lg:block z-10'
            src='/images/stake/welcome_to_lashiba_desktop.png'
            alt='animated shiba'
            width={10}
            height={10}
          />
          <Image
            className='w-[380px] h-[98px] lg:hidden z-10'
            src='/images/stake/welcome_to_lashiba_mobile.png'
            alt='animated shiba'
            width={10}
            height={10}
          />
          <div
            className='text-center lg:text-left flex-1 ml-0 lg:ml-[32px] mb-0 lg:mb-4 text-[18px] lg:text-[2ppx] text-black mt-[48px] lg:mt-0'>
            <p>
              The distribution of $LaShiba token rewards will occur at a rate of 608.82 $LaShiba tokens per ETH block.
            </p>
            <p className='mt-[8px] lg:mt-0'>
              These rewards will be disbursed over 2 years and will be claimable once claim goes live.
            </p>
          </div>
        </div>
        <div className='relative mt-[16px] mb-[160px]'>
          <div className='flex flex-col 2xl:flex-row gap-[32px] lg:items-center flex-wrap'>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px] mt-[16px] place-items-center">
              <StokeForm />
              <TotalStakedForm />
              <EstimateRewardsForm />
              <ClaimRewardsForm />
            </div>
            <div className='flex-1'>
              <ChartPanel />
            </div>
          </div>
        </div>
      </div>

      <Image
        className='lg:block hidden absolute left-[-72px] bottom-[0px] w-[352px] h-[327px]'
        src={'/images/animated-hero-shiba-compressed.gif'}
        alt=''
        width={0}
        height={0}
        loading='lazy'
      />

      <Image
        className='lg:block hidden absolute left-[136px] bottom-[0px] w-[188px] h-[177px]'
        src={'/images/castle-hero.webp'}
        alt=''
        width={0}
        height={0}
        loading='lazy'
      />
      <div className='lg:block hidden  absolute lg:flex justify-center items-end bottom-[0px] left-0 right-0 z-[20]'>
        <Image
          className='w-[284px] h-[284px] scale-x-[-1]'
          src={'/images/about-animation-1.gif'}
          alt=''
          width={0}
          height={0}
          loading='lazy'
        />

        <Image
          className='w-[79px] h-[78px] mb-[16px] ml-[-60px]'
          src={'/images/stake//ball.png'}
          alt=''
          width={0}
          height={0}
          loading='lazy'
        />
      </div>

      <Image
        className='lg:block hidden absolute right-[20px] bottom-[0px] w-[429px] h-[509px] z-[20]'
        src={'/images/about-animation-2.gif'}
        alt=''
        width={0}
        height={0}
        loading='lazy'
      />

      <Image
        className='lg:block hidden absolute w-[61px] h-[82px] bottom-[40px] right-[51px]'
        src={'/images/stake/shroom3.png'}
        alt=''
        width={0}
        height={0}
        loading='lazy'
      />

      <Image
        className='lg:block hidden absolute w-[61px] h-[82px] bottom-[40px] right-[401px] rotate-[-20deg]'
        src={'/images/stake/shroom3.png'}
        alt=''
        width={0}
        height={0}
        loading='lazy'
      />
    </div >
  );
}
