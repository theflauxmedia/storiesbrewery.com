import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturedBrews from "@/components/FeaturedBrews";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";
import DeveloperCredit from "@/components/DeveloperCredit";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Stories Brewery & Kitchen - Bengaluru's Premier Craft Brewery & Rooftop Dining"
        description="Experience craft beers, nature-infused dining, and enchanting ambiance at Stories Brewery & Kitchen. Bengaluru's greenest rooftop brewery with 50,000+ plants across BTM Layout, HSR Layout, Rajajinagar, Raja Rajeshwari Nagar, Nagarbahavi & Dubai."
        keywords="brewery bengaluru, craft beer btm layout, rooftop dining bangalore, microbrewery hsr layout, fresh beer rajajinagar, raja rajeshwari nagar stories, nagarbahavi stories, artisan brewery bangalore, nature dining bangalore, craft beer bangalore"
        url="https://storiesbrewery.com"
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturedBrews />
          <BlogSection />
          <GallerySection />
        </main>
        <Footer />
        <DeveloperCredit />
      </div>
    </>
  );
};

export default Index;
