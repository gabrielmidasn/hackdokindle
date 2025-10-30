"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, X, Star } from "lucide-react";
import UpsellPopup from './upsell-popup';

const OfferCard = ({ offer, isFeatured, onEssentialClick }: any) => {
    return (
      <div className={`relative border-2 ${isFeatured ? 'border-gold shadow-gold/30' : 'border-gray-700'} bg-card rounded-xl p-6 text-center transform transition-transform duration-300 ${isFeatured ? 'scale-105 shadow-2xl' : 'hover:scale-105'}`}>
        {isFeatured && <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gold text-charcoal-black px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg"><Star size={16} />MAIS VENDIDO</div>}
        <h3 className="text-2xl font-headline text-gold mb-2 mt-4">{offer.title}</h3>
        <p className="text-4xl font-bold mb-4">{offer.price}</p>
        <ul className="text-left space-y-3 mb-8 text-light-gray">
          {offer.features.map((feature: any, index: number) => (
            <li key={index} className="flex items-start">
              {feature.included ? <Check className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-1" /> : <X className="w-5 h-5 text-red-500 mr-3 shrink-0 mt-1" />}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <Button onClick={() => !isFeatured && onEssentialClick()} size="lg" className={`${isFeatured ? 'bg-gold text-charcoal-black hover:bg-gold/90' : 'bg-gray-600'} w-full font-bold text-lg`}>
          {offer.cta}
        </Button>
      </div>
    );
  };
  
  export default function Offers() {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const offers = [
      {
        title: "Pacote Essencial",
        price: "R$ 12,90",
        features: [
          { text: "15 livros", included: true },
          { text: "Grupo privado no WhatsApp", included: false },
          { text: "Acesso vitalício", included: false },
          { text: "Contos eróticos diários", included: false },
          { text: "Atualizações semanais", included: false },
          { text: "Best-sellers internacionais", included: false },
        ],
        cta: "Quero começar agora"
      },
      {
        title: "Coleção Completa",
        price: "R$ 23,90",
        features: [
          { text: "50 livros", included: true },
          { text: "Best-sellers internacionais", included: true },
          { text: "Best-sellers nacionais", included: true },
          { text: "Grupo privado no WhatsApp", included: true },
          { text: "Acesso vitalício", included: true },
          { text: "Contos eróticos diários", included: true },
          { text: "Atualizações semanais", included: true },
          { text: "Títulos censurados e virais", included: true },
          { text: "Curadoria premium", included: true },
        ],
        cta: "Quero a coleção completa"
      }
    ];

    const handleEssentialClick = () => {
        setPopupOpen(true);
    }
  
    return (
        <section id="ofertas" className="py-16 bg-charcoal-black">
            <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-headline text-center text-gold mb-16">
                Escolha seu acesso ao universo Dark Romance
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-center">
                <OfferCard offer={offers[0]} isFeatured={false} onEssentialClick={handleEssentialClick} />
                <OfferCard offer={offers[1]} isFeatured={true} />
            </div>
            </div>
            {isPopupOpen && <UpsellPopup onClose={() => setPopupOpen(false)} />}
      </section>
    );
  }
