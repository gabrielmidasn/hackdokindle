"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Image from "next/image";
import { ArrowRight, LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
});

export default function Hero() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    console.log(values.url);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast({
      title: "Processing URL",
      description: "We're starting to renew your site. This is a demo.",
    })
    setLoading(false);
    // Here you would redirect or show the next step
  }

  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-image");

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-card">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                Breathe New Life into Your Website
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Enter your website's URL and let our AI-powered tool
                automatically recreate it with a fresh, modern design.
                Customize styles, edit content, and launch your renewed site in
                minutes.
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2"
              >
                <FormField
                  control={form.control}
                  name="url"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          placeholder="https://example.com"
                          {...field}
                          className="text-base"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-6"
                >
                  {loading ? (
                    <LoaderCircle className="animate-spin" />
                  ) : (
                    <>
                      Renew Site <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              width={600}
              height={400}
              alt={heroImage.description}
              data-ai-hint={heroImage.imageHint}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          )}
        </div>
      </div>
    </section>
  );
}
