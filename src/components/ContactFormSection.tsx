import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle2 } from "lucide-react";

const ContactFormSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Anfrage erfolgreich gesendet!",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
  };

  return (
    <section ref={ref} id="contact-form" className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <span className="text-gold font-medium tracking-wider uppercase text-sm">Kontakt</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary">
              Jetzt Immobilie kostenlos prüfen lassen
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tragen Sie sich kurz ein – wir melden uns innerhalb von 24 Stunden persönlich 
              und zeigen Ihnen, wie einfach und sicher Habitania Ihre Immobilie übernimmt.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 lg:p-10 shadow-card"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                  Vielen Dank für Ihre Anfrage!
                </h3>
                <p className="text-muted-foreground">
                  Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Ihr Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Max Mustermann"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Telefonnummer *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+49 123 456789"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-Mail-Adresse *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-medium text-foreground">
                    Standort der Immobilie *
                  </label>
                  <Input
                    id="location"
                    name="location"
                    required
                    placeholder="z.B. Cloppenburg, Vechta, Oldenburg"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Nachricht (optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Erzählen Sie uns mehr über Ihre Immobilie..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Wird gesendet...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Jetzt kostenlos anfragen
                      <Send className="w-5 h-5" />
                    </span>
                  )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
