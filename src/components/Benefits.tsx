import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Domicilio Gratis",
    description: "En compras superiores a $500.000 COP",
  },
  {
    title: "Experiencia Comprobada",
    description: "5 años sirviendo a la costa caribeña",
  },
  {
    title: "Calidad Garantizada",
    description: "Productos de marcas reconocidas: Coca-Cola, Postobón",
  },
  {
    title: "Amplio Catálogo",
    description: "Desechables, bolsas, insumos de aseo, alimentos y bebidas",
  },
  {
    title: "Ubicación Estratégica",
    description: "En Barranquilla, cobertura en toda la región",
  },
  {
    title: "Atención Personalizada",
    description: "Asesoría directa por WhatsApp",
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
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border border-border shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-secondary" strokeWidth={3} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
