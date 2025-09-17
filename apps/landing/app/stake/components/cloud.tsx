import Image from 'next/image';

export default function Cloud() {
  return (
    <div>
      <Image
        className="fixed top-[-58px] left-[588px] w-[192px] h-[118px] hidden lg:block z-10"
        src='/images/stake/cloud.png'
        alt='cloud'
        width={100} 
        height={100} />
      <Image
        className="fixed top-[145px] left-[-76px] w-[192px] h-[118px] hidden lg:block z-10"
        src='/images/stake/cloud.png'
        alt='cloud'
        width={100} 
        height={100} />
      <Image
        className="fixed top-[210px] right-[12px] w-[161.44px] h-[99px] hidden lg:block z-10"
        src='/images/stake/cloud.png'
        alt='cloud'
        width={100} 
        height={100} />
        <Image
          className="fixed top-[44px] right-[91px] w-[104px] h-[64px] lg:hidden z-10"
          src='/images/stake/cloud.png'
          alt='cloud'
          width={100} 
          height={100} />
    </div>
  );
}
