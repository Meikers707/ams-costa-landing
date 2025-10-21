import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import whatsappLogoWhite from "@/assets/whatsapp-logo-white.svg";
// Productos Espumados
import portacomidaC1 from "@/assets/products/portacomida-c1.png";
import portacomidaJ1 from "@/assets/products/portacomida-j1.png";
import portacomidaJ1Negro from "@/assets/products/portacomida-j1-negro.png";
import portacomidaJ2 from "@/assets/products/portacomida-j2.png";
import portacomidaP3 from "@/assets/products/portacomida-p3.png";
import vasoEspumado from "@/assets/products/vaso-espumado.png";
import vasoPlasticoTami from "@/assets/products/vaso-plastico-tami.png";
import vasoPlasticoWau from "@/assets/products/vaso-plastico-wau.png";
import bandejaEspumada from "@/assets/products/bandeja-espumada.png";
import bowlBamboo from "@/assets/products/bowl-bamboo.png";
import contenedorDobleUso from "@/assets/products/contenedor-doble-uso.png";
// Cubiertos
import cucharaSopera from "@/assets/products/cuchara-sopera.png";
import cuchillo from "@/assets/products/cuchillo.png";
import tenedor from "@/assets/products/tenedor.png";
// Tapas
import tapaCristal from "@/assets/products/tapa-cristal.png";
import tapaSalsero from "@/assets/products/tapa-salsero.png";
// Productos de Cartón
import vaso4Onzas from "@/assets/products/vaso-4onzas.png";
import vaso7Onzas from "@/assets/products/vaso-7onzas.png";
import portacomidaP3Espumado from "@/assets/products/portacomida-p3-espumado.png";
import portacomidaJ2Espumado from "@/assets/products/portacomida-j2-espumado.png";
import portacomidaC1Espumado from "@/assets/products/portacomida-c1-espumado.png";
import plato15 from "@/assets/products/plato-15.png";
import plato23 from "@/assets/products/plato-23.png";
import cajaC3 from "@/assets/products/caja-c3.png";

interface Product {
  name: string;
  category: string;
  color: string;
  colorHex: string;
  reference: string;
  info: string;
  image?: string;
}

const espumadoProducts: Product[] = [
  {
    name: "Portacomida P3",
    category: "Espumado",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "P3",
    info: "Espumado con 3 compartimientos, ideal para comidas completas",
    image: portacomidaP3,
  },
  {
    name: "Portacomida C1",
    category: "Espumado",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "C1",
    info: "Compacto, perfecto para hamburguesas y sándwiches",
    image: portacomidaC1,
  },
  {
    name: "Portacomida J1",
    category: "Espumado",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "J1 Blanco",
    info: "Rectangular, versátil para todo tipo de comidas",
    image: portacomidaJ1,
  },
  {
    name: "Portacomida J1 Negro",
    category: "Espumado",
    color: "Negro",
    colorHex: "#000000",
    reference: "J1 Negro",
    info: "Elegante presentación en color negro, ideal para eventos",
    image: portacomidaJ1Negro,
  },
  {
    name: "Portacomida J2",
    category: "Espumado",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "J2",
    info: "Con 2 compartimientos, ideal para plato principal y acompañamiento",
    image: portacomidaJ2,
  },
  {
    name: "Bandeja Espumada",
    category: "Espumado",
    color: "Negro",
    colorHex: "#000000",
    reference: "BE-1.3",
    info: "Bandeja espumada altura 1.3cm, perfecta para exhibición de alimentos",
    image: bandejaEspumada,
  },
  {
    name: "Bowl Bamboo Natural",
    category: "Espumado",
    color: "Natural",
    colorHex: "#D4A574",
    reference: "BB-Natural",
    info: "Bowl de bambú biodegradable, eco-amigable y elegante",
    image: bowlBamboo,
  },
  {
    name: "Vaso Espumado 16oz",
    category: "Espumado",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "16oz",
    info: "Resistente, mantiene la temperatura de bebidas frías y calientes",
    image: vasoEspumado,
  },
  {
    name: "Vaso Plástico Tami",
    category: "Espumado",
    color: "Transparente",
    colorHex: "#FFFFFF",
    reference: "Tami",
    info: "Económico y resistente, ideal para bebidas frías",
    image: vasoPlasticoTami,
  },
  {
    name: "Vaso Plástico Wau",
    category: "Espumado",
    color: "Transparente",
    colorHex: "#87CEEB",
    reference: "Wau",
    info: "Cristalino, excelente presentación para eventos",
    image: vasoPlasticoWau,
  },
  {
    name: "Contenedor Doble Uso",
    category: "Espumado",
    color: "Negro",
    colorHex: "#000000",
    reference: "CDU-Negro",
    info: "Contenedor versátil con tapa incluida, ideal para ensaladas y bowls",
    image: contenedorDobleUso,
  },
  {
    name: "Tapa Cristal",
    category: "Accesorios",
    color: "Transparente",
    colorHex: "#FFFFFF",
    reference: "TC",
    info: "Tapa cristalina transparente, compatible con múltiples contenedores",
    image: tapaCristal,
  },
  {
    name: "Tapa Salsero",
    category: "Accesorios",
    color: "Transparente",
    colorHex: "#FFFFFF",
    reference: "TS",
    info: "Tapa para salseros y contenedores pequeños, cierre hermético",
    image: tapaSalsero,
  },
  {
    name: "Cuchara Sopera",
    category: "Cubiertos",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "CS",
    info: "Cuchara desechable resistente, ideal para sopas y postres",
    image: cucharaSopera,
  },
  {
    name: "Tenedor",
    category: "Cubiertos",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "TN",
    info: "Tenedor desechable resistente, perfecto para todo tipo de comidas",
    image: tenedor,
  },
  {
    name: "Cuchillo",
    category: "Cubiertos",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "CU",
    info: "Cuchillo desechable con filo dentado, corte eficiente",
    image: cuchillo,
  },
];

const cartonProducts: Product[] = [
  {
    name: "Vaso Espumado 4 oz",
    category: "Cartón",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "4oz",
    info: "Diámetro: 6,6 cm | Fondo: 4,5 cm | Peso: 1,6 g",
    image: vaso4Onzas,
  },
  {
    name: "Vaso Espumado 7 oz",
    category: "Cartón",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "7oz",
    info: "Ideal para bebidas calientes y frías",
    image: vaso7Onzas,
  },
  {
    name: "Portacomida P3 Cartón",
    category: "Cartón",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "P3-Cartón",
    info: "Alto: 7,5 cm | 20x21 cm | Peso: 40,7 g | 3 compartimentos",
    image: portacomidaP3Espumado,
  },
  {
    name: "Portacomida J2 Cartón",
    category: "Cartón",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "J2-Cartón",
    info: "Alto: 6 cm | 16,5x24 cm | Peso: 31,2 g | 2 compartimentos",
    image: portacomidaJ2Espumado,
  },
  {
    name: "Portacomida C1 Cartón",
    category: "Cartón",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "C1-Cartón",
    info: "Alto: 7,5 cm | 14,5x15 cm | Peso: 19,5 g",
    image: portacomidaC1Espumado,
  },
  {
    name: "Plato de Cartón #15",
    category: "Cartón",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "#15",
    info: "Diámetro: 15 cm | Peso: 8 g | Ecológico",
    image: plato15,
  },
  {
    name: "Plato de Cartón #23",
    category: "Cartón",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "#23",
    info: "Diámetro: 23 cm | Peso: 22 g | Resistente",
    image: plato23,
  },
  {
    name: "Caja Rectangular C3",
    category: "Cartón",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "C3",
    info: "Alto: 4,5 cm | 18,5x13,2 cm | Peso: 35,8 g",
    image: cajaC3,
  },
];

const categoryColors: Record<string, string> = {
  'Espumado': 'bg-blue-100 text-blue-700 border-blue-200',
  'Cartón': 'bg-green-100 text-green-700 border-green-200',
  'Cubiertos': 'bg-accent/10 text-foreground border-accent/20',
  'Accesorios': 'bg-purple-100 text-purple-700 border-purple-200',
};

const ProductCatalog = () => {
  const getWhatsAppUrl = (product: Product) => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto: ${product.name} - Ref: ${product.reference}. ¿Podrían darme más información sobre disponibilidad y precio?`
    );
    return `https://wa.me/573205971329?text=${message}`;
  };

  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground tracking-tight">
          Nuestros Productos
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        
        {/* Sección Espumado */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Productos Espumados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {espumadoProducts.map((product, index) => (
              <a
                key={index}
                href={getWhatsAppUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
                aria-label={`Consultar disponibilidad de ${product.name}`}
              >
                <Card 
                  className="group cursor-pointer border-2 border-border bg-card rounded-xl overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Visual Area with aspect ratio */}
                  <div className="relative aspect-[4/3] bg-blue-100">
                    {/* Category Badge */}
                    <span className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-md text-[10px] font-medium uppercase tracking-wider border backdrop-blur-sm ${categoryColors[product.category] || 'bg-muted/50 text-foreground border-border'}`}>
                      {product.category}
                    </span>
                    
                    {/* Product Image or Color Circle */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div 
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: product.colorHex }}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <CardContent className="p-4 sm:p-5 flex flex-col min-h-[220px]">
                    {/* Product Header */}
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-normal">
                        Ref: {product.reference}
                      </p>
                    </div>
                    
                    {/* Product Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-grow">
                      {product.info}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="mt-auto">
                      <div className="w-full px-4 py-2.5 rounded-lg bg-whatsapp text-white font-semibold text-sm transition-colors duration-200 group-hover:bg-whatsapp/90 flex items-center justify-center gap-2">
                        <img src={whatsappLogoWhite} alt="WhatsApp" className="h-4 w-4" />
                        Consultar disponibilidad
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        {/* Sección Cartón */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-foreground">
            Productos de Cartón
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {cartonProducts.map((product, index) => (
              <a
                key={index}
                href={getWhatsAppUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
                aria-label={`Consultar disponibilidad de ${product.name}`}
              >
                <Card 
                  className="group cursor-pointer border-2 border-border bg-card rounded-xl overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 hover:border-primary/30 animate-fade-in h-full"
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Visual Area with aspect ratio */}
                  <div className="relative aspect-[4/3] bg-green-100">
                    {/* Category Badge */}
                    <span className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-md text-[10px] font-medium uppercase tracking-wider border backdrop-blur-sm ${categoryColors[product.category] || 'bg-muted/50 text-foreground border-border'}`}>
                      {product.category}
                    </span>
                    
                    {/* Product Image or Color Circle */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      {product.image ? (
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                        />
                      ) : (
                        <div 
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                          style={{ backgroundColor: product.colorHex }}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <CardContent className="p-4 sm:p-5 flex flex-col min-h-[220px]">
                    {/* Product Header */}
                    <div className="mb-3">
                      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground font-normal">
                        Ref: {product.reference}
                      </p>
                    </div>
                    
                    {/* Product Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2 flex-grow">
                      {product.info}
                    </p>
                    
                    {/* CTA Button */}
                    <div className="mt-auto">
                      <div className="w-full px-4 py-2.5 rounded-lg bg-whatsapp text-white font-semibold text-sm transition-colors duration-200 group-hover:bg-whatsapp/90 flex items-center justify-center gap-2">
                        <img src={whatsappLogoWhite} alt="WhatsApp" className="h-4 w-4" />
                        Consultar disponibilidad
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <a
            href="https://drive.google.com/file/d/1LCUo_2o65hI-BUk_TSJvDnyGd8K_ySzG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-secondary px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <FileText className="w-7 h-7 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Ver Catálogo Completo</span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full animate-pulse"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
