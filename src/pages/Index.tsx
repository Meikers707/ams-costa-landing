import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductCatalog from "@/components/ProductCatalog";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div id="home" className="min-h-screen">
      <Hero />
      <Benefits />
      <ProductCatalog />
      <AboutUs />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
