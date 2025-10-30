import { Button } from "@/components/ui/button";
import { ShieldCheck, MessageCircle } from "lucide-react";

export default function Guarantee() {
  return (
    <section className="py-4 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
        <ShieldCheck className="mx-auto text-gold mb-4" size={64} />
        <h2 className="text-3xl md:text-4xl font-headline text-gold mb-4">
          Sua compra 100% protegida
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Você tem 15 dias para decidir. Se não gostar, devolvemos 100% do valor imediatamente, sem burocracia.
        </p>
        <Button asChild size="lg" className="bg-green-600 text-white font-bold hover:bg-green-700 transform hover:scale-105 transition-transform duration-300 w-full max-w-sm mx-auto text-xs md:text-sm">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="mr-2" /> Falar com suporte no WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
}
