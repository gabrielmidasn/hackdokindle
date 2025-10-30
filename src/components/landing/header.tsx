import Link from "next/link";
import { Button } from "@/components/ui/button";

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-6 w-6 text-primary"
  >
    <path d="M12 2v2" />
    <path d="M14.4 3.6c1.3 1.3 2 3.1 2 4.9 0 3.9-3.1 7-7 7s-7-3.1-7-7c0-1.8.7-3.6 2-4.9" />
    <path d="M8 11.5v-3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2.5" />
    <path d="M12 18.5v-2.5" />
  </svg>
);


export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <Link
        href="#"
        className="flex items-center justify-center gap-2"
        prefetch={false}
      >
        <Logo />
        <span className="text-lg font-semibold font-headline">Site Renew</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          href="#features"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Features
        </Link>
        <Button variant="outline" className="hidden md:flex">
          Sign In
        </Button>
        <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Get Started
        </Button>
      </nav>
    </header>
  );
}
