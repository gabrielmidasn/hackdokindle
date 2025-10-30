import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Palette, Type } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const colorPalettes = [
  { name: 'Vibrant Teal', colors: ['#20c997', '#e8f8f5', '#9a65c9', '#343a40'] },
  { name: 'Oceanic Blue', colors: ['#007bff', '#e7f3ff', '#6c757d', '#f8f9fa'] },
  { name: 'Sunset Warmth', colors: ['#fd7e14', '#fff8e1', '#6f42c1', '#343a40'] },
];

const fontPairings = [
  { header: 'Space Grotesk', body: 'Inter' },
  { header: 'Poppins', body: 'Lato' },
  { header: 'Playfair Display', body: 'Roboto' },
];

export default function StyleShowcase() {
  const showcaseImage = PlaceHolderImages.find(p => p.id === 'showcase-1');

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card" id="features">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">AI-Powered Styling</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose from AI-generated color palettes and font pairings to instantly transform the look and feel of your site.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-center pt-8">
          <div className="flex flex-col gap-6">
            <Card className="p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold font-headline">Color Palettes</h3>
              </div>
              <div className="flex flex-col gap-4">
                {colorPalettes.map((palette, index) => (
                  <Button key={index} variant={index === 0 ? 'default' : 'outline'} className="w-full justify-between h-12">
                    <span>{palette.name}</span>
                    <div className="flex gap-1.5">
                      {palette.colors.map(color => (
                        <div key={color} className="w-6 h-6 rounded-full border" style={{ backgroundColor: color }} />
                      ))}
                    </div>
                    {index === 0 && <Check className="w-5 h-5 ml-2 text-primary-foreground" />}
                  </Button>
                ))}
              </div>
            </Card>
            <Card className="p-6 text-left">
              <div className="flex items-center gap-3 mb-4">
                <Type className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold font-headline">Font Pairings</h3>
              </div>
              <div className="flex flex-col gap-4">
                {fontPairings.map((font, index) => (
                  <Button key={index} variant={index === 0 ? 'default' : 'outline'} className="w-full justify-between h-12">
                    <div>
                      <span className="font-semibold" style={{fontFamily: font.header}}>{font.header}</span> / <span style={{fontFamily: font.body}}>{font.body}</span>
                    </div>
                    {index === 0 && <Check className="w-5 h-5 ml-2 text-primary-foreground" />}
                  </Button>
                ))}
              </div>
            </Card>
          </div>
          {showcaseImage && (
            <div className="rounded-xl overflow-hidden border shadow-lg">
                <Image
                  src={showcaseImage.imageUrl}
                  alt={showcaseImage.description}
                  data-ai-hint={showcaseImage.imageHint}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full"
                />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
