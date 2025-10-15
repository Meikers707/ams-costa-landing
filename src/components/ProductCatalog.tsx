import { Card, CardContent } from "@/components/ui/card";
import whatsappLogoWhite from "@/assets/whatsapp-logo-white.svg";

interface Product {
  name: string;
  category: string;
  color: string;
  colorHex: string;
  reference: string;
  info: string;
}

const products: Product[] = [
  {
    name: "Portacomida P3",
    category: "Desechables",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "P3",
    info: "Espumado, ideal para comidas calientes",
  },
  {
    name: "Vaso Espumado 16oz",
    category: "Desechables",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "16oz",
    info: "Resistente, mantiene temperatura",
  },
  {
    name: "Bolsa de Basura Jumbo",
    category: "Bolsas",
    color: "Negro",
    colorHex: "#000000",
    reference: "Jumbo Negro",
    info: "60x70cm, alta resistencia",
  },
  {
    name: "Bolsa de Papel Kraft #5",
    category: "Bolsas",
    color: "Natural",
    colorHex: "#D4A574",
    reference: "5",
    info: "13.3x8.8x28.0cm, eco-amigable",
  },
  {
    name: "Tapabocas Desechables",
    category: "Insumos de Aseo",
    color: "Azul",
    colorHex: "#4A90E2",
    reference: "Paquete x 50",
    info: "Tricapa, alta protección",
  },
  {
    name: "Coca Cola PET",
    category: "Bebidas",
    color: "Rojo",
    colorHex: "#F40009",
    reference: "600ml",
    info: "Producto Coca-Cola Company",
  },
  {
    name: "Agua Brisa",
    category: "Bebidas",
    color: "Azul Claro",
    colorHex: "#87CEEB",
    reference: "600ml",
    info: "Agua purificada Postobón",
  },
  {
    name: "Detergente Neutro Multiusos",
    category: "Insumos de Aseo",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "Galón 4L",
    info: "Limpieza profunda",
  },
  {
    name: "Arroz Premium",
    category: "Alimentos",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "Bulto 45kg",
    info: "Marca Milena, primera calidad",
  },
  {
    name: "Papel Higiénico Jumbo",
    category: "Insumos de Aseo",
    color: "Blanco",
    colorHex: "#FFFFFF",
    reference: "Rollo x 250mts",
    info: "Alto rendimiento",
  },
];

const categoryColors: Record<string, string> = {
  'Desechables': 'bg-primary/10 text-primary border-primary/20',
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
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        
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
                <div className="relative aspect-[4/3] bg-muted">
                  {/* Category Badge */}
                  <span className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-md text-[10px] font-medium uppercase tracking-wider border backdrop-blur-sm ${categoryColors[product.category] || 'bg-muted/50 text-foreground border-border'}`}>
                    {product.category}
                  </span>
                  
                  {/* Color Circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: product.colorHex }}
                    />
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
