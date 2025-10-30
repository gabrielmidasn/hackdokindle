import Image from "next/image";

const bookCovers = [
  "https://imgur.com/dyuJfSF.png", "https://imgur.com/JTZ1DoC.png", "https://imgur.com/qtiY6B2.png",
  "https://imgur.com/V7Pjdwn.png", "https://imgur.com/jZnaaoC.png", "https://imgur.com/3lQFgiD.png",
  "https://imgur.com/1Hma2gI.png", "https://imgur.com/kvZLohL.png", "https://imgur.com/aCAWYio.png",
  "https://imgur.com/y8jdHdg.png", "https://imgur.com/CAO909r.png", "https://imgur.com/IFncPf2.png"
];

export default function BookGrid() {
  return (
    <section className="pt-8 pb-16 bg-charcoal-black">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-headline text-dark-red mb-4 uppercase">
          Hack do Kindle
        </h1>
        <p className="text-xl md:text-2xl text-light-gray max-w-3xl mx-auto mb-2">
          Os Dark Romances mais procurados, vendidos e até censurados, todos em um só lugar.
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
          Sem censura. Hot. Intensos. Alguns foram banidos no Brasil e agora estão todos aqui.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {bookCovers.map((src, index) => (
            <div key={index} className="aspect-[3/4] relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image src={src} alt={`Capa de livro ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
