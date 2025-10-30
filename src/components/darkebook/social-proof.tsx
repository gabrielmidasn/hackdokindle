"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const socialProofImages = [
  "https://imgur.com/XaBXxJA.png",
  "https://imgur.com/H0bnL73.png",
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-charcoal-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-headline text-gold mb-8">
          O que nossos leitores dizem
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xl mx-auto"
        >
          <CarouselContent>
            {socialProofImages.map((src, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                    <Image
                      src={src}
                      alt={`Prova social ${index + 1}`}
                      width={600}
                      height={400}
                      className="rounded-lg shadow-lg"
                    />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-gold border-gold hover:bg-gold hover:text-charcoal-black" />
          <CarouselNext className="text-gold border-gold hover:bg-gold hover:text-charcoal-black" />
        </Carousel>
      </div>
    </section>
  );
}
