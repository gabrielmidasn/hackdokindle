import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { UnifrakturCook, Cormorant_Garamond } from 'next/font/google';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
});

const unifrakturcook = UnifrakturCook({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-unifrakturcook',
});

export const metadata: Metadata = {
  title: 'Darkebook',
  description: 'Os Dark Romances mais procurados, vendidos e até censurados, todos em um só lugar.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${cormorant.variable} ${unifrakturcook.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
