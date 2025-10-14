import { Truck, Award, ShieldCheck, Package, MapPin, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Truck,
    title: "Domicilio Gratis",
    description: "En compras superiores a $500.000 COP",
  },
  {
    icon: Award,
    title: "Experiencia Comprobada",
    description: "5 años sirviendo a la costa caribeña",
  },
  {
    icon: ShieldCheck,
    title: "Calidad Garantizada",
    description: "Productos de marcas reconocidas: Coca-Cola, Postobón",
  },
  {
    icon: Package,
    title: "Amplio Catálogo",
    description: "Desechables, bolsas, insumos de aseo, alimentos y bebidas",
  },
  {
    icon: MapPin,
    title: "Ubicación Estratégica",
    description: "En Barranquilla, cobertura en toda la región",
  },
  {
    icon: MessageCircle,
    title: "Atención Personalizada",
    description: "Asesoría directa por WhatsApp",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          ¿Por qué elegirnos?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
