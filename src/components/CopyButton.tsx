import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

interface CopyButtonProps {
  text: string;
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "default" | "lg";
}

export const CopyButton = ({ text, variant = "outline", size = "default" }: CopyButtonProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "Texto copiado!",
        description: "A frase foi copiada para sua área de transferência.",
        duration: 2000,
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o texto. Tente novamente.",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  return (
    <Button
      onClick={handleCopy}
      variant={variant}
      size={size}
      className={`font-inter font-medium transition-all duration-300 ${
        copied ? "animate-copy-success" : ""
      }`}
      disabled={copied}
    >
      {copied ? (
        <>
          <Check className="w-4 h-4 mr-2" />
          Copiado!
        </>
      ) : (
        <>
          <Copy className="w-4 h-4 mr-2" />
          Copiar Frase
        </>
      )}
    </Button>
  );
};