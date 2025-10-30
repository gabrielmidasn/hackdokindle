import Image from 'next/image';

export default function Hero() {
  return (
    <header className="w-full flex justify-center py-8 bg-charcoal-black">
      <Image src="https://i.imgur.com/kLjVTZS.png" alt="Darkebook Logo" width={200} height={50} />
    </header>
  );
}
