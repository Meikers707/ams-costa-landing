import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";

interface Product {
  name: string;
  category: string;
  color: string;
  reference: string;
  info: string;
  categoryColor: string;
}

const products: Product[] = [
  {
    name: "Portacomida P3",
    category: "Desechables",
    color: "Blanco",
    reference: "P3",
    info: "Espumado, ideal para comidas calientes",
    categoryColor: "category-disposables",
  },
  {
    name: "Vaso Espumado 16oz",
    category: "Desechables",
    color: "Blanco",
    reference: "16oz",
    info: "Resistente, mantiene temperatura",
    categoryColor: "category-disposables",
  },
  {
    name: "Bolsa de Basura Jumbo",
    category: "Bolsas",
    color: "Negro",
    reference: "Jumbo Negro",
    info: "60x70cm, alta resistencia",
    categoryColor: "category-bags",
  },
  {
    name: "Bolsa de Papel Kraft #5",
    category: "Bolsas",
    color: "Natural",
    reference: "5",
    info: "13.3x8.8x28.0cm, eco-amigable",
    categoryColor: "category-bags",
  },
  {
    name: "Tapabocas Desechables",
    category: "Insumos de Aseo",
    color: "Azul",
    reference: "Paquete x 50",
    info: "Tricapa, alta protección",
    categoryColor: "category-cleaning",
  },
  {
    name: "Coca Cola PET",
    category: "Bebidas",
    color: "Transparente",
    reference: "600ml",
    info: "Producto Coca-Cola Company",
    categoryColor: "category-beverages",
  },
  {
    name: "Agua Brisa",
    category: "Bebidas",
    color: "Transparente",
    reference: "600ml",
    info: "Agua purificada Postobón",
    categoryColor: "category-beverages",
  },
  {
    name: "Detergente Neutro Multiusos",
    category: "Insumos de Aseo",
    color: "Blanco",
    reference: "Galón 4L",
    info: "Limpieza profunda",
    categoryColor: "category-cleaning",
  },
  {
    name: "Arroz Premium",
    category: "Alimentos",
    color: "Blanco",
    reference: "Bulto 45kg",
    info: "Marca Milena, primera calidad",
    categoryColor: "category-food",
  },
  {
    name: "Papel Higiénico Jumbo",
    category: "Insumos de Aseo",
    color: "Blanco",
    reference: "Rollo x 250mts",
    info: "Alto rendimiento",
    categoryColor: "category-cleaning",
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
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Nuestros Productos Destacados
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div 
                className={`h-40 bg-gradient-to-br from-${product.categoryColor} to-${product.categoryColor}/70 relative`}
                style={{
                  background: `linear-gradient(135deg, hsl(var(--${product.categoryColor})) 0%, hsl(var(--${product.categoryColor}) / 0.7) 100%)`
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.2),transparent)]" />
              </div>
              
              <CardContent className="p-6">
                <Badge 
                  className="mb-3"
                  style={{
                    backgroundColor: `hsl(var(--${product.categoryColor}))`,
                    color: 'white',
                  }}
                >
                  {product.category}
                </Badge>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">{product.name}</h3>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-muted-foreground">Color:</span>
                  <Badge variant="outline">{product.color}</Badge>
                </div>
                
                <div className="mb-3">
                  <span className="text-sm font-semibold text-foreground">Ref: {product.reference}</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{product.info}</p>
                
                <Button
                  onClick={() => handleWhatsAppClick(product)}
                  className="w-full bg-whatsapp hover:bg-whatsapp/90 text-white"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
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
