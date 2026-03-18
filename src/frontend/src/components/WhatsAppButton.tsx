import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
}

export function WhatsAppButton({
  variant = "default",
  size = "lg",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const phoneNumber = "31653336711";
    const message = encodeURIComponent(
      "Hallo! Ik heb interesse in rijlessen bij Rijschool Xenio.",
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant}
      size={size}
      className="gap-2 bg-whatsapp hover:bg-whatsapp/90 text-white border-whatsapp min-h-[48px] text-base sm:text-lg w-full sm:w-auto"
    >
      <img
        src="/assets/generated/whatsapp-icon.png"
        alt="WhatsApp"
        className="w-5 h-5 md:w-6 md:h-6"
      />
      WhatsApp Contact
    </Button>
  );
}
