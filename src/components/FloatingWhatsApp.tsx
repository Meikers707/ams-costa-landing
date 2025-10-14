import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/573205971329"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <Button
        size="lg"
        className="bg-whatsapp hover:bg-whatsapp/90 text-white rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-soft"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
      <span className="absolute right-20 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        ¡Escríbenos!
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
