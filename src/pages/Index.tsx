import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductCatalog from "@/components/ProductCatalog";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Benefits />
      <ProductCatalog />
      <AboutUs />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
