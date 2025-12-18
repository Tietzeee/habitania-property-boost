import { motion } from "framer-motion";
import { Check, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustNotes = [
  "Hochwertige Einrichtung inklusive",
  "Komplettverwaltung aus einer Hand",
  "Langfristige Mietverträge über Mietspiegel",
  "Persönlicher Ansprechpartner vor Ort",
];

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header */}
        <motion.header 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12 lg:mb-16"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-xl">H</span>
            </div>
            <span className="font-serif text-2xl font-semibold text-primary">HABITANIA</span>
          </div>
          <Button variant="hero" onClick={scrollToForm} className="hidden sm:flex">
            Kontakt aufnehmen
          </Button>
        </motion.header>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-primary leading-tight">
                Ihre Immobilie.{" "}
                <span className="text-gradient-gold">Unser Rundum-Service.</span>{" "}
                Null Aufwand für Sie.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
                Habitania richtet Ihre Wohnung hochwertig ein, übernimmt die komplette Verwaltung 
                und schließt langfristige Mietverträge über dem Mietspiegel ab – 
                <span className="font-semibold text-foreground"> ohne Kosten für Sie.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg" onClick={scrollToForm} className="text-lg px-8">
                Jetzt Immobilie prüfen lassen
              </Button>
            </div>

            {/* Trust Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {trustNotes.map((note, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-sm text-muted-foreground">{note}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-medium bg-navy">
              {/* Video Placeholder - Replace src with actual video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                poster="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
              >
                {/* Add your video source here */}
                <source src="" type="video/mp4" />
              </video>
              
              {/* Overlay for when no video is available */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center shadow-gold"
                >
                  <Play className="w-8 h-8 text-gold fill-gold ml-1" />
                </motion.button>
              </div>

              {/* Badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-card/90 backdrop-blur-sm rounded-lg p-4 shadow-soft">
                  <p className="text-sm font-medium text-foreground">
                    Sehen Sie selbst, wie hochwertig wir Immobilien einrichten
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Frame */}
            <div className="absolute -inset-4 border-2 border-gold/20 rounded-3xl -z-10" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
