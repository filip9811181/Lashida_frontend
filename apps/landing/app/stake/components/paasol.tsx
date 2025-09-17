import Image from 'next/image';

export default function Paasol() {
  return (
    <div>
      <Image
        className="fixed top-[245px] left-[-216px] w-[800px] h-[646px] hidden lg:block -rotate-[16deg] z-1"
        src='/images/stake/passol.png'
        alt='cloud'
        width={100} 
        height={100} />
    </div>
  );
}
