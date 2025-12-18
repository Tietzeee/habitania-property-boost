import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Entstehen mir wirklich keine Kosten?",
    answer: "Nein. Einrichtung, Möblierung, Verwaltung, Technik – wir tragen alles. Sie haben keinerlei Kosten und keinerlei Aufwand.",
  },
  {
    question: "Mit wem schließe ich den Vertrag?",
    answer: "Mit Habitania direkt. Wir sind Ihr einziger Mieter und Ansprechpartner. Sie haben nur einen Vertrag mit uns – keine Einzelmieter, keine Komplikationen.",
  },
  {
    question: "Was passiert bei Reparaturen?",
    answer: "Unsere eigenen Techniker sind sofort vor Ort und kümmern sich um alles. Sie müssen nichts organisieren oder koordinieren.",
  },
  {
    question: "Wie lange laufen die Mietverträge?",
    answer: "Üblich sind mehrjährige Verträge – mit Konditionen über dem Mietspiegel. So haben Sie langfristige Planungssicherheit.",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-card relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-gold font-medium tracking-wider uppercase text-sm">FAQ</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary">
              Häufig gestellte Fragen
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-secondary/50 border border-border rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-serif text-lg font-medium text-primary hover:text-gold py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
