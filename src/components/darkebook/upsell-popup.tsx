"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X as CloseIcon, Zap } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    if (timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  return (
    <div className="text-4xl font-bold text-gold">
      {minutes}:{seconds}
    </div>
  );
};

export default function UpsellPopup({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-card border-2 border-gold rounded-lg shadow-2xl w-full max-w-md text-center p-8 relative animate-in zoom-in-95">
        <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={onClose}>
          <CloseIcon size={24} />
        </Button>
        
        <Zap className="mx-auto text-gold mb-4" size={48} />

        <h2 className="text-2xl font-headline text-gold mb-2">OFERTA RELÂMPAGO!</h2>
        <p className="text-lg text-light-gray mb-4">
          Leve a <span className="font-bold">Coleção Completa</span> com um desconto exclusivo!
        </p>

        <div className="my-6">
            <p className="text-xl text-gray-500 line-through">De R$ 23,90</p>
            <p className="text-4xl font-bold text-gold my-2">Por apenas R$ 15,90</p>
        </div>

        <CountdownTimer />
        <p className="text-sm text-gray-400 mt-2 mb-6">Esta oferta expira em breve!</p>

        <Button size="lg" className="w-full bg-gold text-charcoal-black font-bold text-lg hover:bg-gold/90 transform hover:scale-105 transition-transform duration-300">
            Quero aproveitar agora!
        </Button>
      </div>
    </div>
  );
}
