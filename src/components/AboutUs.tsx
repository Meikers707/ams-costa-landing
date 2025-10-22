import { Target, Eye, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground tracking-tight">
          Conoce Distribuciones AMS
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-16"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Quiénes Somos</h3>
              <p className="text-muted-foreground leading-relaxed">
                Somos una empresa comercializadora de productos desechables, bolsas plásticas y de papel, 
                insumos de aseo, alimentos y bebidas refrescantes de marcas reconocidas como Coca-Cola y Postobón. 
                Con 5 años de experiencia, ofrecemos calidad y servicio excepcional a nuestros clientes.
              </p>
            </div>
            
            <Card className="border border-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Misión</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Empresa sustentable dedicada a la distribución de productos de marcas reconocidas y alta calidad, 
                      orientada a la satisfacción del cliente mediante un proceso de mejora continua.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border border-border shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Visión</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Ser reconocida como la empresa referente en la distribución de productos de alta calidad, 
                      brindando un servicio eficiente, confiable y rentable para toda nuestra cadena comercial.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="border border-border shadow-sm h-full">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-foreground">Ubicación</h4>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Dirección</p>
                    <p className="font-semibold text-foreground">Calle 39 No. 23b - 26, Barrio Montes</p>
                  </div>
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Ciudad</p>
                    <p className="font-semibold text-foreground">Barranquilla, Colombia</p>
                  </div>
                  
                  <div className="pt-4">
                    <Button
                      onClick={() => window.open('https://www.google.com/maps/search/?api=1&query=Calle+39+No.+23b+-+26,+Barrio+Montes,+Barranquilla', '_blank')}
                      className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    >
                      <MapPin className="mr-2 h-4 w-4" />
                      Cómo llegar
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8 aspect-video rounded-lg overflow-hidden bg-muted">
                 <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125334.93042141123!2d-74.90037753839036!3d10.984752542455453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d44d12ae605%3A0x2633844581b917b2!2sBarranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1761161244670!5m2!1ses!2sco"
  width="400"
  height="300"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
