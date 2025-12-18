import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const CoreMessageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary leading-tight">
              So wertvoll kann Ihre Immobilie aussehen –{" "}
              <span className="text-gradient-gold">ohne dass Sie etwas dafür tun müssen.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Im Video sehen Sie eine unserer vollständig eingerichteten Wohnungen. 
                Genau diese Qualität bieten wir auch für Ihre Immobilie – inklusive 
                Möblierung, Betreuung, Verwaltung und technischer Abwicklung.
              </p>
              <p>
                Viele Eigentümer haben tolle Immobilien, aber keine Zeit für Einrichtung, 
                Übergaben, Reparaturen oder Verwaltung.{" "}
                <span className="font-semibold text-foreground">
                  Deshalb übernimmt Habitania die Immobilie komplett.
                </span>
              </p>
              <p className="text-xl font-medium text-foreground">
                Sie erhalten stabile Mieteinnahmen – wir übernehmen alles andere.
              </p>
            </div>
          </motion.div>

          {/* Decorative Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isInView ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 flex items-center justify-center gap-4"
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold" />
            <div className="w-3 h-3 rounded-full bg-gold" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreMessageSection;
