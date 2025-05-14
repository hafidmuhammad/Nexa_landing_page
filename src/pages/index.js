import HeroSection from "../components/landing/HeroSection";
import PillarsSection from "../components/landing/PillarsSection";
import ChallengeBanner from "../components/landing/ChallengeBanner";
import ContentPreviewSection from "../components/landing/ContentPreviewSection";
import FeaturesSection from "../components/landing/FeaturesSection";
import OrganizationSection from "../components/landing/OrganizationSection";
import NexaCharacterTabs from "../components/common/NexaCharacterTabs";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";
import FloatingChatButton from "../components/common/FloatingChatButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F3EFFF] dark:bg-[#2D1B4A]">
      {/* ...header... */}
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <PillarsSection />
        <ChallengeBanner />
        <ContentPreviewSection />
        <FeaturesSection />
        <OrganizationSection />
        <NexaCharacterTabs />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
}