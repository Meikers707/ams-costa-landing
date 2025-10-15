import { Truck, Award, ShieldCheck, Package, MapPin, MessageCircle, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Domicilio Gratis",
    description: "En compras superiores a $500.000 COP",
    icon: Truck,
  },
  {
    title: "Experiencia Comprobada",
    description: "5 años sirviendo a la costa caribeña",
    icon: Award,
  },
  {
    title: "Calidad Garantizada",
    description: "Productos de marcas reconocidas: Coca-Cola, Postobón",
    icon: ShieldCheck,
  },
  {
    title: "Amplio Catálogo",
    description: "Desechables, bolsas, insumos de aseo, alimentos y bebidas",
    icon: Package,
  },
  {
    title: "Ubicación Estratégica",
    description: "En Barranquilla, cobertura en toda la región",
    icon: MapPin,
  },
  {
    title: "Atención Personalizada",
    description: "Asesoría directa por WhatsApp",
    icon: MessageCircle,
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground tracking-tight">
          ¿Por qué elegirnos?
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="group cursor-pointer border-2 border-border hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 animate-fade-in bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 relative">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-md group-hover:shadow-lg">
                    <Icon className="w-7 h-7 text-secondary" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                  
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
