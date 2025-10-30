import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-gray-800 py-8">
      <div className="container mx-auto px-4 text-center text-gray-400">
        <Image src="https://i.imgur.com/gA3J4XJ.png" alt="Darkebook Logo" width={150} height={40} className="mx-auto mb-4" />
        <p className="text-gold text-lg mb-4">Sua biblioteca dark premium em um só clique.</p>
        <nav className="flex justify-center gap-4 md:gap-6 mb-6">
          <Link href="#" className="text-sm hover:text-gold">Início</Link>
          <Link href="#ofertas" className="text-sm hover:text-gold">Ofertas</Link>
          <Link href="#faq" className="text-sm hover:text-gold">FAQ</Link>
          <Link href="#" className="text-sm hover:text-gold">Garantia</Link>
        </nav>
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="text-gray-400 hover:text-gold"><MessageCircle /></a>
          <a href="mailto:contato@darkebook.com" className="text-gray-400 hover:text-gold"><Mail /></a>
        </div>
        <div className="flex justify-center gap-4 mb-6">
            <a href="#" className="text-gray-400 hover:text-gold"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gold"><Twitter size={20} /></a>
        </div>
        <p className="text-xs">&copy; 2025 Darkebook. Todos os direitos reservados.</p>
        <div className="text-xs mt-1">
          <Link href="#" className="hover:text-gold">Política de Privacidade</Link> | <Link href="#" className="hover:text-gold">Termos de Uso</Link>
        </div>
      </div>
    </footer>
  );
}
