import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";
import portacomidaP3 from "@/assets/products/portacomida-p3.png";
import portacomidaC1 from "@/assets/products/portacomida-c1.png";
import portacomidaJ1 from "@/assets/products/portacomida-j1.png";
import portacomidaJ1Negro from "@/assets/products/portacomida-j1-negro.png";
import portacomidaJ2 from "@/assets/products/portacomida-j2.png";
import bowlBamboo from "@/assets/products/bowl-bamboo.png";
import vasoEspumado from "@/assets/products/vaso-espumado.png";
import contenedorDobleUso from "@/assets/products/contenedor-doble-uso.png";

const products = [
  {
    name: "Portacomida P3",
    image: portacomidaP3,
    category: "Desechables",
  },
  {
    name: "Portacomida C1",
    image: portacomidaC1,
    category: "Desechables",
  },
  {
    name: "Portacomida J1",
    image: portacomidaJ1,
    category: "Desechables",
  },
  {
    name: "Portacomida J1 Negro",
    image: portacomidaJ1Negro,
    category: "Desechables",
  },
  {
    name: "Portacomida J2",
    image: portacomidaJ2,
    category: "Desechables",
  },
  {
    name: "Bowl de Bamboo Natural",
    image: bowlBamboo,
    category: "Desechables",
  },
  {
    name: "Vaso Espumado",
    image: vasoEspumado,
    category: "Desechables",
  },
  {
    name: "Contenedor Doble Uso",
    image: contenedorDobleUso,
    category: "Desechables",
  },
];

const getWhatsAppUrl = (productName: string) => {
  const message = `Hola, estoy interesado en el producto: ${productName}`;
  return `https://wa.me/573015813455?text=${encodeURIComponent(message)}`;
};

const ProductCarousel = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Productos Destacados
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {products.map((product, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden hover-lift border-2 border-border hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="aspect-square mb-4 flex items-center justify-center bg-muted rounded-lg overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-3 flex-1 flex flex-col">
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground w-fit">
                        {product.category}
                      </span>
                      
                      <h3 className="text-lg font-bold text-foreground">
                        {product.name}
                      </h3>
                      
                      <div className="mt-auto pt-4">
                        <Button
                          asChild
                          className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white"
                        >
                          <a
                            href={getWhatsAppUrl(product.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Consultar disponibilidad
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProductCarousel;
