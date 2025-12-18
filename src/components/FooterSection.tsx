import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
              <span className="text-primary font-serif font-bold text-xl">H</span>
            </div>
            <span className="font-serif text-2xl font-semibold">HABITANIA</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-gold transition-colors">Impressum</a>
            <a href="#" className="hover:text-gold transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-gold transition-colors">Kontakt</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Habitania. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
