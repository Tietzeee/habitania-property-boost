import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ClipboardList, Eye, Home } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Eintragen",
    description: "Sie geben kurz Ihre Immobilie an. Wir melden uns innerhalb von 24 Stunden.",
  },
  {
    number: "02",
    icon: Eye,
    title: "Besichtigung & Mietangebot",
    description: "Wir besichtigen die Immobilie und bieten Ihnen einen langfristigen Mietvertrag über dem Mietspiegel.",
  },
  {
    number: "03",
    icon: Home,
    title: "Komplettübernahme",
    description: "Wir richten die Immobilie hochwertig ein, übernehmen Reinigung, Verwaltung und Technik – Sie haben keine Arbeit mehr.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">Unser Prozess</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary">
            In drei Schritten zur sorgenfreien Vermietung
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-gold/40 to-gold/10" />
              )}

              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-medium transition-shadow duration-300 relative group">
                {/* Step Number */}
                <span className="absolute -top-4 -right-4 text-7xl font-serif font-bold text-gold/10 group-hover:text-gold/20 transition-colors">
                  {step.number}
                </span>

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-6 shadow-gold">
                    <step.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
