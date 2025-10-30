import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CopyPlus,
  FilePenLine,
  Import,
  LayoutTemplate,
  Palette,
  Rocket,
} from "lucide-react";

const features = [
  {
    icon: <Import className="w-8 h-8 text-primary" />,
    title: "Content Import",
    description:
      "Automatically import all content (text, images, etc.) from your existing URL.",
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: "Structure Recreation",
    description:
      "Recreate the general layout and structure of your existing site with high fidelity.",
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: "AI Style Generation",
    description:
      "Generate a set of possible color palettes and typography styles to easily customize your site.",
  },
  {
    icon: <FilePenLine className="w-8 h-8 text-primary" />,
    title: "Content Editing",
    description:
      "Easily edit all imported content including text, images, and links before going live.",
  },
  {
    icon: <CopyPlus className="w-8 h-8 text-primary" />,
    title: "Page Management",
    description:
      "Manage, create, and organize pages on your recreated site with an intuitive interface.",
  },
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "One-Click Deployment",
    description:
      "Seamlessly deploy your renewed website to our secure and scalable hosting platform.",
  },
];

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Everything You Need to Modernize Your Site
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our powerful toolkit provides a comprehensive solution for website
              renewal, from automated importing to AI-powered design and easy
              deployment.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:max-w-none lg:grid-cols-3 pt-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="gap-4">
                {feature.icon}
                <div className="grid gap-1">
                  <CardTitle className="font-headline">
                    {feature.title}
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
