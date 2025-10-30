import { ArrowDown } from "lucide-react";

export default function PainSection() {
    return (
      <section id="dor" className="py-16 bg-charcoal-black">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-headline text-light-gray mb-6">
            Cansada de pagar caro para ler seus Dark Romances favoritos?
          </h2>
          <div className="space-y-4 text-gray-300 text-lg">
            <p>
              Quem ama Dark Romance sabe: os títulos mais famosos estão no Kindle, mas cada compra pesa no bolso. Comprar um por um sai caro, e no fim você acaba desistindo de ler tudo o que gostaria.
            </p>
            <p>
              O resultado? Você deixa de aproveitar as histórias mais intensas e desejadas do gênero, simplesmente porque o preço não cabe no seu bolso.
            </p>
            <div className="flex flex-col items-center mt-8">
              <ArrowDown className="text-gold w-10 h-10 mb-2 animate-bounce" />
              <div className="border-2 border-gold rounded-lg p-4 bg-card/50">
                <p className="font-bold text-gold">
                  Foi exatamente por isso que criamos essa coleção: os Dark Romances mais procurados, vendidos e até censurados, reunidos em um só lugar, por um valor que qualquer fã pode pagar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }