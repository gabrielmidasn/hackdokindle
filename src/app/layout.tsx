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

      {/* Pixel do Facebook */}
      <script
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1176748244394666');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Fallback para quem tem JS desabilitado */}
      <noscript
        // @ts-ignore
        dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1176748244394666&ev=PageView&noscript=1" />`,
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

