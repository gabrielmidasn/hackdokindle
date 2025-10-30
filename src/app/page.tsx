import Features from "@/components/landing/features";
import FinalCTA from "@/components/landing/final-cta";
import Footer from "@/components/landing/footer";
import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import StyleShowcase from "@/components/landing/style-showcase";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <StyleShowcase />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
