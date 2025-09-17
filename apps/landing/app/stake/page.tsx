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
        <div className='relative mt-[16px]'>
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
    </div>
  );
}
