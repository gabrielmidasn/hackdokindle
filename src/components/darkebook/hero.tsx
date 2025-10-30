import Image from 'next/image';

export default function Hero() {
  return (
    <header className="w-full flex justify-center py-8 bg-charcoal-black">
      <Image src="https://i.imgur.com/gA3J4XJ.png" alt="Darkebook Logo" width={188} height={50} />
    </header>
  );
}
