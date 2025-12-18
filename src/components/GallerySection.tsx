import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
    alt: "Luxuriöses Wohnzimmer mit modernem Design",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    alt: "Elegantes Schlafzimmer",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    alt: "Moderne Küche",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    alt: "Stilvolles Apartment",
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="text-gold font-medium tracking-wider uppercase text-sm">
            Unsere Objekte
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary">
            So hochwertig richten wir Immobilien ein
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Die Einrichtung zeigt unseren Standard: modern, hochwertig, robust gewählt und 
            perfekt für Kurz- und Langzeitvermietungen geeignet.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className={`relative overflow-hidden rounded-xl group ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"} w-full`}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-card px-6 py-4 rounded-full shadow-soft">
            <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
            <span className="text-foreground font-medium">
              Genau dieses Niveau erhält Ihre Immobilie – vollständig von uns umgesetzt
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection;
