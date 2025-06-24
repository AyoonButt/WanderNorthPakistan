import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import DestinationsCarousel from "@/components/destinations-carousel";
import FeaturedPackages from "@/components/featured-packages";
import SignatureExperiences from "@/components/signature-experiences";
import TestimonialsSlider from "@/components/testimonials-slider";
import StatsSection from "@/components/stats-section";
import TrustIndicators from "@/components/trust-indicators";
import TravelGuideSection from "@/components/travel-guide-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Our Promise Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-charcoal mb-8">Our Promise</h2>
          <p className="text-lg md:text-xl text-medium-gray leading-relaxed">
            At Wander North Pakistan, we turn towering peaks and turquoise lakes into lifelong memories. 
            Led by guides who were raised in these valleys, each itinerary balances adventure, culture and comfort—so 
            you can soak in the magic while we handle every logistic, big or small.
          </p>
        </div>
      </section>
      
      <DestinationsCarousel />
      <FeaturedPackages />
      <SignatureExperiences />
      <TestimonialsSlider />
      <StatsSection />
      <TrustIndicators />
      <TravelGuideSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
