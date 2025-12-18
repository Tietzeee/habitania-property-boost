import HeroSection from "@/components/HeroSection";
import CoreMessageSection from "@/components/CoreMessageSection";
import ProcessSection from "@/components/ProcessSection";
import BenefitsSection from "@/components/BenefitsSection";
import TargetAudienceSection from "@/components/TargetAudienceSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import ContactFormSection from "@/components/ContactFormSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <CoreMessageSection />
      <ProcessSection />
      <BenefitsSection />
      <TargetAudienceSection />
      <GallerySection />
      <FAQSection />
      <ContactFormSection />
      <FooterSection />
    </main>
  );
};

export default Index;
