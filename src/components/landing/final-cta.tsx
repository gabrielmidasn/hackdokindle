import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center gap-4 px-4 text-center md:px-6">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-headline">
            Ready to Renew?
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Give your website the modern refresh it deserves. It's fast, easy,
            and AI-powered. Get started for free today.
          </p>
        </div>
        <Link href="#" prefetch={false}>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            Start Your Renewal
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
