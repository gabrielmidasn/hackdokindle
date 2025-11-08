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
      <head>
      {/* Meta de verificação do domínio do Facebook */}
      <meta
        name="facebook-domain-verification"
        content="0pyc6rr1ncwsry83hewcmwhjwcy1mx"
      />
{/* Script do UTMify (Pixel + CAPI) */}
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.pixelId = "690f93de76e51dace148e305";
      var a = document.createElement("script");
      a.setAttribute("async", "");
      a.setAttribute("defer", "");
      a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
      document.head.appendChild(a);
    `,
  }}
/>

    </head>

    <body className={`${faunaOne.variable} ${cinzel.variable} font-body antialiased`}>
      {children}
      <Toaster />
    </body>
  </html>
);
}

