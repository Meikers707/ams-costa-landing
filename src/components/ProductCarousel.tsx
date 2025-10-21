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
import vaso4Onzas from "@/assets/products/vaso-4onzas.png";
import vaso7Onzas from "@/assets/products/vaso-7onzas.png";
import portacomidaP3Espumado from "@/assets/products/portacomida-p3-espumado.png";
import portacomidaJ2Espumado from "@/assets/products/portacomida-j2-espumado.png";
import portacomidaC1Espumado from "@/assets/products/portacomida-c1-espumado.png";
import plato15 from "@/assets/products/plato-15.png";
import plato23 from "@/assets/products/plato-23.png";
import cajaC3 from "@/assets/products/caja-c3.png";

const espumadoProducts = [
  {
    name: "Vaso Espumado 4 oz",
    image: vaso4Onzas,
    category: "Espumado",
    info: "Diámetro: 6,6 cm | Fondo: 4,5 cm | Peso: 1,6 g",
  },
  {
    name: "Vaso Espumado 7 oz",
    image: vaso7Onzas,
    category: "Espumado",
    info: "Ideal para bebidas calientes y frías",
  },
  {
    name: "Portacomida P3 Espumado",
    image: portacomidaP3Espumado,
    category: "Espumado",
    info: "3 compartimentos | Conserva temperatura",
  },
  {
    name: "Portacomida J2 Espumado",
    image: portacomidaJ2Espumado,
    category: "Espumado",
    info: "2 compartimentos | A prueba de fugas",
  },
  {
    name: "Portacomida C1 Espumado",
    image: portacomidaC1Espumado,
    category: "Espumado",
    info: "1 compartimento | Ideal para almuerzos",
  },
];

const cartonProducts = [
  {
    name: "Plato de Cartón #15",
    image: plato15,
    category: "Cartón",
    info: "Diámetro: 15 cm | Peso: 8 g | Ecológico",
  },
  {
    name: "Plato de Cartón #23",
    image: plato23,
    category: "Cartón",
    info: "Diámetro: 23 cm | Peso: 22 g | Resistente",
  },
  {
    name: "Caja Rectangular C3",
    image: cajaC3,
    category: "Cartón",
    info: "Alto: 4,5 cm | 18,5x13,2 cm | Peso: 35,8 g",
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
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          Nuestros Productos Destacados
        </h2>
        
        {/* Sección Espumado */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Productos Espumados
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3500,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {espumadoProducts.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden hover-lift border-2 border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="aspect-square mb-4 flex items-center justify-center bg-blue-100 rounded-lg overflow-hidden">
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
                        
                        <p className="text-sm text-muted-foreground">{product.info}</p>
                        
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

        {/* Sección Cartón */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Productos de Cartón
          </h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {cartonProducts.map((product, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <Card className="overflow-hidden hover-lift border-2 border-border hover:border-primary transition-all duration-300 h-full flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="aspect-square mb-4 flex items-center justify-center bg-green-100 rounded-lg overflow-hidden">
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
                        
                        <p className="text-sm text-muted-foreground">{product.info}</p>
                        
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
      </div>
    </section>
  );
};

export default ProductCarousel;
