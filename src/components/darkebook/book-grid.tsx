import Image from "next/image";

const bookCovers = [
  "https://i.imgur.com/dyuJfSF.png", "https://i.imgur.com/JTZ1DoC.png", "https://i.imgur.com/qtiY6B2.png",
  "https://i.imgur.com/V7Pjdwn.png", "https://i.imgur.com/jZnaaoC.png", "https://i.imgur.com/3lQFgiD.png",
  "https://i.imgur.com/1Hma2gI.png", "https://i.imgur.com/kvZLohL.png", "https://i.imgur.com/aCAWYio.png",
  "https://i.imgur.com/y8jdHdg.png", "https://i.imgur.com/CAO909r.png", "https://i.imgur.com/IFncPf2.png"
];

export default function BookGrid() {
  return (
    <section className="pt-8 pb-12 bg-charcoal-black">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-headline text-dark-red mb-2 uppercase">
          Hack do Kindle
        </h1>
        <p className="text-xl md:text-2xl text-light-gray max-w-3xl mx-auto mb-1">
          Os Dark Romances mais procurados, vendidos e até censurados, todos em um só lugar.
        </p>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-6">
          Sem censura. Hot. Intensos. Alguns foram banidos no Brasil e agora estão todos aqui.
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-2 md:gap-3">
          {bookCovers.map((src, index) => (
            <div key={index} className="aspect-[3/4] relative rounded-md overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Image src={src} alt={`Capa de livro ${index + 1}`} layout="fill" objectFit="cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
