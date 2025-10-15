import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import whatsappLogoWhite from "@/assets/whatsapp-logo-white.svg";
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
import cucharaSopera from "@/assets/products/cuchara-sopera.png";
import cuchillo from "@/assets/products/cuchillo.png";
import tapaCristal from "@/assets/products/tapa-cristal.png";
import tapaSalsero from "@/assets/products/tapa-salsero.png";
import tenedor from "@/assets/products/tenedor.png";

interface Product {
  name: string;
  category: string;
  color: string;
  colorHex: string;
  reference: string;
  info: string;
  image?: string;
}

const products: Product[] = [
  {
    name: "Portacomida P3",
    category: "Desechables",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "P3",
    info: "Espumado con 3 compartimientos, ideal para comidas completas",
    image: portacomidaP3,
  },
  {
    name: "Portacomida C1",
    category: "Desechables",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "C1",
    info: "Compacto, perfecto para hamburguesas y sándwiches",
    image: portacomidaC1,
  },
  {
    name: "Portacomida J1",
    category: "Desechables",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "J1 Blanco",
    info: "Rectangular, versátil para todo tipo de comidas",
    image: portacomidaJ1,
  },
  {
    name: "Portacomida J1 Negro",
    category: "Desechables",
    color: "Negro",
    colorHex: "#000000",
    reference: "J1 Negro",
    info: "Elegante presentación en color negro, ideal para eventos",
    image: portacomidaJ1Negro,
  },
  {
    name: "Portacomida J2",
    category: "Desechables",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "J2",
    info: "Con 2 compartimientos, ideal para plato principal y acompañamiento",
    image: portacomidaJ2,
  },
  {
    name: "Bandeja Espumada",
    category: "Desechables",
    color: "Negro",
    colorHex: "#000000",
    reference: "BE-1.3",
    info: "Bandeja espumada altura 1.3cm, perfecta para exhibición de alimentos",
    image: bandejaEspumada,
  },
  {
    name: "Bowl Bamboo Natural",
    category: "Desechables",
    color: "Natural",
    colorHex: "#D4A574",
    reference: "BB-Natural",
    info: "Bowl de bambú biodegradable, eco-amigable y elegante",
    image: bowlBamboo,
  },
  {
    name: "Vaso Espumado 16oz",
    category: "Desechables",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "16oz",
    info: "Resistente, mantiene la temperatura de bebidas frías y calientes",
    image: vasoEspumado,
  },
  {
    name: "Vaso Plástico Tami",
    category: "Desechables",
    color: "Transparente",
    colorHex: "#FFFFFF",
    reference: "Tami",
    info: "Económico y resistente, ideal para bebidas frías",
    image: vasoPlasticoTami,
  },
  {
    name: "Vaso Plástico Wau",
    category: "Desechables",
    color: "Transparente",
    colorHex: "#87CEEB",
    reference: "Wau",
    info: "Cristalino, excelente presentación para eventos",
    image: vasoPlasticoWau,
  },
  {
    name: "Contenedor Doble Uso",
    category: "Desechables",
    color: "Negro",
    colorHex: "#000000",
    reference: "CDU-Negro",
    info: "Contenedor versátil con tapa incluida, ideal para ensaladas y bowls",
    image: contenedorDobleUso,
  },
  {
    name: "Tapa Cristal",
    category: "Desechables",
    color: "Transparente",
    colorHex: "#FFFFFF",
    reference: "TC",
    info: "Tapa cristalina transparente, compatible con múltiples contenedores",
    image: tapaCristal,
  },
  {
    name: "Tapa Salsero",
    category: "Desechables",
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

const categoryColors: Record<string, string> = {
  'Desechables': 'bg-primary/10 text-primary border-primary/20',
  'Cubiertos': 'bg-accent/10 text-foreground border-accent/20',
  'Bolsas': 'bg-secondary/10 text-white border-secondary/20',
  'Insumos de Aseo': 'bg-purple-100 text-purple-700 border-purple-200',
  'Alimentos': 'bg-orange-100 text-orange-700 border-orange-200',
  'Bebidas': 'bg-cyan-100 text-cyan-700 border-cyan-200',
};

const ProductCatalog = () => {
  const getWhatsAppUrl = (product: Product) => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto: ${product.name} - Ref: ${product.reference}. ¿Podrían darme más información sobre disponibilidad y precio?`
    );
    return `https://wa.me/5733054679063?text=${message}`;
  };

  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground tracking-tight">
          Nuestros Productos Destacados
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-12"></div>
        
        <div className="flex justify-center mb-12">
          <a
            href="https://drive.google.com/file/d/1LCUo_2o65hI-BUk_TSJvDnyGd8K_ySzG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-secondary px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <FileText className="w-6 h-6" />
            Ver Catálogo Completo
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product, index) => (
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
                <div className="relative aspect-[4/3] bg-gradient-to-br from-muted to-muted/50">
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
    </section>
  );
};

export default ProductCatalog;
