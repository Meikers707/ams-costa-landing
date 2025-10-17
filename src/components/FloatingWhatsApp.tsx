import { Button } from "@/components/ui/button";
import whatsappLogoWhite from "@/assets/whatsapp-logo-white.svg";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/573015813455"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300"
      >
        <img src={whatsappLogoWhite} alt="WhatsApp" className="w-8 h-8" />
      </Button>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg font-medium">
        ¡Escríbenos!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
