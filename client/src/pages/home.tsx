import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProfileSection } from "@/components/ProfileSection";
import { GuideSection } from "@/components/GuideSection";
import { RTPSection } from "@/components/RTPSection";
import { ArticleSection } from "@/components/ArticleSection";
import { FAQSection } from "@/components/FAQSection";
import { ResponsibleGamingSection } from "@/components/ResponsibleGamingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Auto-scroll to RTP section to showcase the 3D globe
    const timer = setTimeout(() => {
      const rtpSection = document.getElementById('rtp');
      if (rtpSection) {
        rtpSection.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }
    }, 3000); // Wait 3 seconds after page load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <RTPSection />
      <ProfileSection />
      <GuideSection />
      <ArticleSection />
      <FAQSection />
      <ResponsibleGamingSection />
      <Footer />
    </div>
  );
}
