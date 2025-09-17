import Image from 'next/image';
import { Lashiba } from '@/components/lashiba';
import Cloud from './components/cloud';

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
      className="relative min-h-screen flex flex-col overflow-x-hidden">
      <Cloud />
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

      <div className="mx-[62px] lg:mx-[146px] mt-[48px] lg:mt-[16px]">
        <div className='flex lg:flex-row flex-col lg:items-end'>
          <Image
            className='w-[444px] h-[125px] hidden lg:block'
            src='/images/stake/welcome_to_lashiba_desktop.png'
            alt='animated shiba'
            width={10}
            height={10}
          />
          <Image
            className='w-[380px] h-[98px] lg:hidden'
            src='/images/stake/welcome_to_lashiba_mobile.png'
            alt='animated shiba'
            width={10}
            height={10}
          />
        </div>
      </div>
    </div>
  );
}
