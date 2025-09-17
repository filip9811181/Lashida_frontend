import About from './modules/about';
import Hero from './modules/hero';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const DressingRoom = dynamic(() => import('./modules/dressing-room'), { ssr: false });
const Faq = dynamic(() => import('./modules/faq'), { ssr: false });
const AboutSection2Container = dynamic(() => import('./modules/about2'), { ssr: false });

const HowTo = dynamic(() => import('./modules/how-to'), { ssr: false });
const News = dynamic(() => import('./modules/news'), { ssr: false });
const Roadmap = dynamic(() => import('./modules/roadmap'), { ssr: false });
const Shibas = dynamic(() => import('./modules/shibas'), { ssr: false });
const Tokenomics = dynamic(() => import('./modules/tokenomics'), { ssr: false });

export default function Home() {
  return (
    <div className='relative flex flex-col overflow-x-hidden'>
      <div id='home' className='relative h-full w-full flex items-center justify-center overflow-hidden z-100'>
        <Image
          src='/images/hero-bg.webp'
          alt={`Background`}
          fill
          priority={true}
          sizes='100vw'
          className='object-cover lg:object-fill'
        />


        <Hero />

      </div>
     
      <About />
   
      <AboutSection2Container />
      <div id='whitepaper'>

        <News />
      </div>
      <div id='how-to-buy'>

        <HowTo />
      </div>

      <div className='relative w-full -mt-1 flex flex-col items-center '>
        <DressingRoom />
      </div>

      <div className='relative w-full -mt-1 flex flex-col items-center '>
        <Tokenomics />
      </div>

      <div className='lg:-mt-[100px] xl:-mt-[200px] relative z-10'>
        <Shibas />
      </div>
      <div className='relative w-full -mt-1 flex flex-col items-center '>
        <Roadmap />
      </div>
       

        <Faq />
     
    </div>
  );
}
