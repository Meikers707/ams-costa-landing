import { Button } from "@/components/ui/button";
import whatsappLogoWhite from "@/assets/whatsapp-logo-white.svg";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(hsl(var(--primary))_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight">
          El aliado que buscas
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Distribuidores de productos desechables, bolsas, insumos de aseo, alimentos y bebidas 
          de marcas reconocidas como Coca-Cola y Postobón en Barranquilla
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button size="lg" asChild className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-6 h-auto rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-base font-semibold">
            <a href="https://wa.me/5733054679063" target="_blank" rel="noopener noreferrer">
              <img src={whatsappLogoWhite} alt="WhatsApp" className="mr-2 h-6 w-6" />
              Consultar por WhatsApp
            </a>
          </Button>
          
          <div className="inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-md text-secondary font-medium shadow-lg">
            <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
            <span>5 años de experiencia</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;