import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { Cinzel, Fauna_One } from 'next/font/google';

const faunaOne = Fauna_One({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fauna-one',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-cinzel',
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
      <body className={`${faunaOne.variable} ${cinzel.variable} font-body antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
