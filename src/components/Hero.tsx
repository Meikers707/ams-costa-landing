import { Button } from "@/components/ui/button";
import whatsappLogo from "@/assets/whatsapp-logo.svg";

const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary)/0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight tracking-tight">
          El aliado que buscas
        </h1>
        
        <p className="text-xl md:text-2xl text-secondary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light">
          Distribuidores de productos desechables, bolsas, insumos de aseo, alimentos y bebidas 
          de marcas reconocidas como Coca-Cola y Postobón en Barranquilla
        </p>
        
        <Button size="lg" onClick={() => window.open('https://wa.me/573205971329', '_blank')} className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-6 h-auto rounded-md shadow-lg hover:shadow-xl transition-all duration-300 text-base font-semibold">
          <img src={whatsappLogo} alt="WhatsApp" className="mr-2 h-6 w-6" />
          Consultar por WhatsApp
        </Button>
        
        <div className="mt-12 inline-flex items-center gap-2 bg-primary px-6 py-3 rounded-md text-secondary font-medium">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse-soft" />
          <span>5 años de experiencia en el mercado</span>
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