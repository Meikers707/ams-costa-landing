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
  return `https://wa.me/573205971329?text=${encodeURIComponent(message)}`;
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
                <Card className="overflow-hidden hover-lift border-2 border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="aspect-square mb-4 flex items-center justify-center bg-blue-100 rounded-lg overflow-hidden"
                    style={{backgroundColor: "#fbdea8ff"}}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    
                    <div className="space-y-3 flex-1 flex flex-col">
                      <span className="inline-block px-3 py-1.5 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/20 w-fit">
                        {product.category}
                      </span>
                      
                      <h3 className="text-lg font-bold text-foreground min-h-[3.5rem] flex items-center">
                        {product.name}
                      </h3>
                      
                      <div className="mt-auto pt-4">
                        <Button
                          asChild
                          className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white gap-2"
                        >
                          <a
                            href={getWhatsAppUrl(product.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                            </svg>
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
