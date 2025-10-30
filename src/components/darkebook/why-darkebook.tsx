import { CheckCircle } from "lucide-react";

const features = [
    {
      title: "Acesso total por valor simbólico.",
      description: "Enquanto no Kindle você gastaria mais de R$ 400, aqui você leva tudo por apenas R$ 12,90. É como pagar um café e levar uma biblioteca inteira."
    },
    {
      title: "O eBook é realmente seu.",
      description: "Sem bloqueios ou assinaturas. Você pode ler quando e onde quiser, enviar para quem quiser e até revender se desejar. Liberdade total."
    },
    {
      title: "Junte-se a uma comunidade.",
      description: "Milhares de leitores já fazem parte da comunidade Darkebook. Gente que cansou de pagar caro e agora tem liberdade para ler e compartilhar cada história."
    }
  ];

export default function WhyDarkebook() {
    return (
      <section className="py-16 bg-charcoal-black">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-headline text-gold mb-4">
            Por que pagar mais no Kindle se na Darkebook é diferente?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            No Kindle, cada título custa caro. Em livrarias físicas, o preço é ainda maior. Resultado: você acaba escolhendo só um ou dois livros e deixa de viver todas as histórias que gostaria. Na Darkebook, você tem acesso a <span className="font-bold text-gold">todos os Dark Romances mais procurados e vendidos</span> por um valor simbólico.
          </p>
          <div className="space-y-6 text-left max-w-3xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-card/50 rounded-lg border border-gray-800">
                <CheckCircle className="w-8 h-8 text-gold mt-1 shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-light-gray">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

    