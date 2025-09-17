import Image from 'next/image';

import { AboutFirstSection } from './first-section';

const About = () => {
  return (
    <div className='relative w-full overflow-hidden -mt-1 z-[90]'>
      <Image
        src='/images/background-beach-2.webp'
        alt={`Background `}
        fill
        sizes='100vw'
        priority={true}
        className='object-cover lg:object-fill'
      />
      <div className='w-screen h-[65px] bg-[#5D3B24] blur-[20px] z-10 absolute bottom-0' />
      <AboutFirstSection />
    </div>
  );
};

export default About;
