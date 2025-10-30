import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { Button } from "@/components/ui/button";
  
  const faqItems = [
    {
      question: "Como recebo os livros após a compra?",
      answer: "Você recebe imediatamente no seu e-mail cadastrado, com link para download."
    },
    {
      question: "Preciso de algum aplicativo específico para ler?",
      answer: "Não. Os arquivos são compatíveis com celular, tablet e computador. Você pode usar qualquer leitor de PDF ou ePub."
    },
    {
      question: "Os livros são realmente meus?",
      answer: "Sim. Diferente de assinaturas, aqui você baixa e guarda os arquivos. Pode ler quando quiser, mesmo offline."
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 15 dias de garantia. Se não ficar satisfeito, devolvemos 100% do valor sem burocracia."
    },
    {
        question: "Os bônus são vitalícios mesmo?",
        answer: "Sim. O grupo no WhatsApp, os contos diários e as atualizações semanais são acessos permanentes para quem garantir a coleção completa."
    },
    {
        question: "Posso pagar com cartão ou Pix?",
        answer: "Sim. Aceitamos cartão de crédito, débito e Pix para facilitar sua compra."
    }
  ];
  
  export default function Faq() {
    return (
      <section id="faq" className="py-16 bg-charcoal-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-headline text-center text-gold mb-8">
            Perguntas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b border-gray-700">
                <AccordionTrigger className="text-lg font-semibold text-left hover:text-gold">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-gold text-gold hover:bg-gold hover:text-charcoal-black font-bold">
              <a href="#ofertas">Voltar para as ofertas</a>
            </Button>
          </div>
        </div>
      </section>
    );
  }
  