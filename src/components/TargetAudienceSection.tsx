import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const idealFor = [
  "sich nicht mit Einrichtung, Verwaltung oder Reparaturen beschäftigen wollen",
  "stabile Miete wünschen",
  "Wertsteigerung ohne eigenes Investment möchten",
];

const locations = ["Cloppenburg", "Vechta", "Oldenburg"];

const TargetAudienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-gradient-navy text-primary-foreground relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <span className="text-gold font-medium tracking-wider uppercase text-sm">
                Standorte & Zielgruppe
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold leading-tight">
                Für wen ist das interessant?
              </h2>
            </div>

            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Wir suchen aktiv Wohnungen und Häuser in{" "}
              <span className="font-semibold text-gold">Cloppenburg, Vechta und Oldenburg</span>.
              Ob leer oder teilweise eingerichtet – wir übernehmen die vollständige Aufwertung und Vermietung.
            </p>

            <div className="space-y-4">
              <p className="font-medium text-primary-foreground">Ideal für Eigentümer, die:</p>
              {idealFor.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground/90">{item}</span>
                </motion.div>
              ))}
            </div>

            <Button variant="gold" size="lg" onClick={scrollToForm} className="mt-4">
              Jetzt unverbindlich anfragen
            </Button>
          </motion.div>

          {/* Right - Location Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid gap-4"
          >
            {locations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 flex items-center gap-4 hover:bg-primary-foreground/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-primary-foreground">
                    {location}
                  </h3>
                  <p className="text-sm text-primary-foreground/60">Aktiv auf der Suche</p>
                </div>
              </motion.div>
            ))}

            {/* Stats Card */}
            <div className="bg-gold/10 backdrop-blur-sm border border-gold/20 rounded-xl p-6 mt-2">
              <p className="text-center text-primary-foreground/80">
                <span className="block text-3xl font-serif font-bold text-gold mb-1">24h</span>
                <span className="text-sm">Rückmeldung garantiert</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
