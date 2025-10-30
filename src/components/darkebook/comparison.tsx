import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Comparison() {
  return (
    <section id="comparacao" className="py-16 bg-charcoal-black">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-headline text-gold mb-8">
          Kindle vs. Darkebook
        </h2>
        <div className="relative w-full max-w-2xl mb-8">
          <Image src="https://imgur.com/ESwQPel.png" alt="Comparação Kindle vs Darkebook" width={800} height={450} className="rounded-lg shadow-2xl" />
        </div>
        <p className="text-xl md:text-2xl text-light-gray max-w-2xl mx-auto mb-4">
          No Kindle, cada título custa caro. No Darkebook, você leva <span className="text-gold font-bold">todos os mais procurados e vendidos</span> por um valor único e acessível.
        </p>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          A mesma leitura, a mesma intensidade, mas por um preço que cabe no seu bolso.
        </p>
        <Button asChild size="lg" className="bg-gold text-charcoal-black font-bold text-lg hover:bg-gold/90 transform hover:scale-105 transition-transform duration-300">
          <a href="#ofertas">Quero economizar agora</a>
        </Button>
      </div>
    </section>
  );
}
