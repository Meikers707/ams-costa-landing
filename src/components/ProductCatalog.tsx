import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import whatsappLogo from "@/assets/whatsapp-logo.svg";

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

const ProductCatalog = () => {
  const handleWhatsAppClick = (product: Product) => {
    const message = encodeURIComponent(
      `Hola! Me interesa el producto: ${product.name} - Ref: ${product.reference}. ¿Podrían darme más información sobre disponibilidad y precio?`
    );
    window.open(`https://wa.me/573205971329?text=${message}`, '_blank');
  };

  return (
    <section id="products" className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground tracking-tight">
          Nuestros Productos Destacados
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="border border-border bg-card hover:shadow-md transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="w-16 h-16 rounded-full flex-shrink-0 border-2 border-border"
                    style={{ backgroundColor: product.colorHex }}
                  />
                  <span className="text-xs text-muted-foreground font-medium">{product.category}</span>
                </div>
                
                <h3 className="text-lg font-bold mb-1 text-foreground">{product.name}</h3>
                
                <div className="mb-2">
                  <span className="text-xs text-muted-foreground">Ref: {product.reference}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.info}</p>
                
                <Button
                  onClick={() => handleWhatsAppClick(product)}
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white rounded-md"
                  size="sm"
                >
                  <img src={whatsappLogo} alt="WhatsApp" className="mr-2 h-4 w-4" />
                  Consultar disponibilidad
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
