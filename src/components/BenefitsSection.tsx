import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Sofa, Users, Wrench, Handshake } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Überdurchschnittliche Mieteinnahmen",
    description: "Sie erhalten höhere Miete als beim klassischen Vermieten – langfristig und vertraglich gesichert.",
  },
  {
    icon: Sofa,
    title: "Komplette Einrichtung auf unsere Kosten",
    description: "Die im Video gezeigte Qualität übernehmen wir 1:1. Keine Kosten. Keine Arbeit. Vollständige Wertsteigerung.",
  },
  {
    icon: Users,
    title: "Verwaltung aus einer Hand",
    description: "Gästemanagement, Reinigung, laufende Betreuung – alles erledigen wir für Sie.",
  },
  {
    icon: Wrench,
    title: "Eigene Techniker bei Schäden",
    description: "Probleme werden sofort gelöst. Sie müssen nichts organisieren.",
  },
  {
    icon: Handshake,
    title: "Transparente, stabile Zusammenarbeit",
    description: "Ein einziger Ansprechpartner, klare Strukturen, keine Überraschungen.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-card relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">Ihre Vorteile</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary">
            Warum Eigentümer uns vertrauen
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`group p-8 rounded-2xl border border-border bg-secondary/30 hover:bg-secondary hover:border-gold/30 transition-all duration-300 ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 group-hover:bg-gradient-gold flex items-center justify-center mb-6 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-gold group-hover:text-primary-foreground transition-colors" />
              </div>

              <h3 className="text-lg font-serif font-semibold text-primary mb-3">
                {benefit.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
