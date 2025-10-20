import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import whatsappLogoWhite from "@/assets/whatsapp-logo-white.svg";
import amsLogo from "@/assets/ams-logo.png";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Beneficios", href: "#benefits" },
  { name: "Productos", href: "#products" },
  { name: "Nosotros", href: "#about" },
  { name: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(href);
    }
  };

  return (
    <nav className={`
      sticky top-0 z-50 w-full
      bg-background/95 backdrop-blur-md
      border-b border-border
      transition-shadow duration-300
      ${isScrolled ? "shadow-md" : ""}
    `}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection("#home")}
              className="hover:opacity-80 transition-opacity"
              aria-label="Ir al inicio"
            >
              <img src={amsLogo} alt="AMS Distribuciones" className="h-20 md:h-24 w-auto" />
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`
                  text-sm font-medium transition-colors
                  hover:text-primary
                  ${activeSection === link.href ? "text-primary" : "text-foreground/80"}
                `}
              >
                {link.name}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              size="sm"
              asChild
              className="bg-whatsapp hover:bg-whatsapp/90 text-white"
            >
              <a href="https://wa.me/573015813455" target="_blank" rel="noopener noreferrer">
                <img src={whatsappLogoWhite} alt="WhatsApp" className="mr-1.5 h-4 w-4" />
                Contactar
              </a>
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col space-y-4 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <Button 
                  className="bg-whatsapp hover:bg-whatsapp/90 text-white mt-4"
                  asChild
                >
                  <a href="https://wa.me/573015813455" target="_blank" rel="noopener noreferrer">
                    <img src={whatsappLogoWhite} alt="WhatsApp" className="mr-2 h-5 w-5" />
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
