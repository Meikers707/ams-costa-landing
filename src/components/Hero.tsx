import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          El aliado que buscas
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
          Distribuidores de productos desechables, bolsas, insumos de aseo, alimentos y bebidas 
          de marcas reconocidas como Coca-Cola y Postobón en Barranquilla
        </p>
        
        <Button size="lg" onClick={() => window.open('https://wa.me/573205971329', '_blank')} className="bg-whatsapp hover:bg-whatsapp/90 text-white px-8 py-6 h-auto rounded-full shadow-2xl hover:scale-105 transition-all duration-300 text-base">
          <MessageCircle className="mr-2 h-6 w-6" />
          Consultar por WhatsApp
        </Button>
        
        <div className="mt-12 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full text-white">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse-soft" />
          <span className="font-semibold">5 años de experiencia en el mercado</span>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </div>
    </section>;
};
export default Hero;