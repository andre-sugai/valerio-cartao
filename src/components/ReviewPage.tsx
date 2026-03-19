import { useState, useEffect } from 'react';
import { MapPin, Smartphone, Phone, Mail, Globe, MessageCircle, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { StarRating } from './StarRating';
import { CopyButton } from './CopyButton';
import { getRandomPhrase } from '@/data/phrases';
import orbee360Logo from '@/assets/logo.png'; // Substituir por logo da Orbee360
import qrCodePlaceholder from '@/assets/qr-code.png';

export const ReviewPage = () => {
  const [currentPhrase, setCurrentPhrase] = useState<string>('');

  useEffect(() => {
    setCurrentPhrase(getRandomPhrase());
  }, []);

  const refreshPhrase = () => {
    setCurrentPhrase(getRandomPhrase());
  };

  return (
    <div className="min-h-screen bg-gradient-hero font-inter">
      <div className="container mx-auto px-4 py-6 max-w-md lg:max-w-2xl">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="mb-6">
            <img
              src={orbee360Logo}
              alt="Orbee360 Logo - Tour Virtual e Google Maps"
              className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full shadow-lg animate-scale-in"
            />
          </div>

          {/* Title Section */}
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary mb-2 animate-fade-in">
              Valério Vieira de Souza
            </h1>
            <p className="text-text-secondary text-sm md:text-base animate-fade-in animation-delay-200">
              Escrevente Autorizado<br />

              Escrituras | Procurações | DoaçãoInventário | União estável | Ata notarialRec. de firma | Divórcio | Usucapião Autenticação | Testamento | Adjudicação
            </p>
          </div>

          {/* Stars Section */}
          <div className="mb-8 animate-bounce-in flex justify-center">
            <div className="text-center">
             {/*  <StarRating size="lg" animated={true} />*/}
              <p className="text-text-secondary text-sm mt-2">
                Clique nos botões abaixo para entrar em contato
              </p>
            </div>
          </div> 
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col gap-4 mb-8">
          {/* WhatsApp */}
          <a
            href="https://api.whatsapp.com/send?phone=5511968436826&text=Oi%20Valerio%2C%20estou%20entrando%20em%20contato%20com%20seu%20cart%C3%A3o%20digital!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-14 bg-white text-black hover:bg-gray-50 border border-gray-200 text-base md:text-lg font-semibold px-4 rounded-xl shadow-sm transform hover:scale-[1.02] transition-all duration-300 animate-fade-in animation-delay-300"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span>Chame no WhatsApp</span>
          </a>

          {/* Download Cartão */}
          <a
            href="/CartaoV1.pdf"
            download="CartaoV1.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-14 bg-white text-black hover:bg-gray-50 border border-gray-200 text-base md:text-lg font-semibold px-4 rounded-xl shadow-sm transform hover:scale-[1.02] transition-all duration-300 animate-fade-in animation-delay-300"
          >
            <Download className="w-5 h-5 flex-shrink-0" />
            <span>Baixar Cartão (PDF)</span>
          </a>

          {/* Celular */}
          <a
            href="tel:+5511968436826"
            className="flex items-center justify-center gap-2 w-full h-14 bg-white text-black hover:bg-gray-50 border border-gray-200 text-base md:text-lg font-semibold px-4 rounded-xl shadow-sm transform hover:scale-[1.02] transition-all duration-300 animate-fade-in animation-delay-400"
          >
            <Smartphone className="w-5 h-5 flex-shrink-0" />
            <span>Ligue para o Celular</span>
          </a>

          {/* PABX */}
          <a
            href="tel:+551130585100"
            className="flex items-center justify-center gap-2 w-full h-14 bg-white text-black hover:bg-gray-50 border border-gray-200 text-base md:text-lg font-semibold px-4 rounded-xl shadow-sm transform hover:scale-[1.02] transition-all duration-300 animate-fade-in animation-delay-500"
          >
            <Phone className="w-5 h-5 flex-shrink-0" />
            <span>Ligue no PABX - Ramal 146</span>
          </a>

          {/* Email */}
          <a
            href="mailto:valerio.souza@cartoriovilaolimpia.com.br"
            className="flex items-center justify-center gap-2 w-full h-14 bg-white text-black hover:bg-gray-50 border border-gray-200 text-base md:text-lg font-semibold px-4 rounded-xl shadow-sm transform hover:scale-[1.02] transition-all duration-300 animate-fade-in animation-delay-600"
          >
            <Mail className="w-5 h-5 flex-shrink-0" />
            <span>Envie um E-mail</span>
          </a>

          {/* Site */}
          <a
            href="http://www.15notas.com.br/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-14 bg-white text-black hover:bg-gray-50 border border-gray-200 text-base md:text-lg font-semibold px-4 rounded-xl shadow-sm transform hover:scale-[1.02] transition-all duration-300 animate-fade-in animation-delay-700"
          >
            <Globe className="w-5 h-5 flex-shrink-0" />
            <span>Acesse nosso Site</span>
          </a>

          {/* Endereço */}
          <a
            href="https://www.google.com/maps/place/15%C2%B0+Cart%C3%B3rio+De+Notas+da+Capital+%2F+SP+-+CART%C3%93RIO+VILA+OL%C3%8DMPIA/@-23.5958049,-46.6911532,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce57382327c013:0x2f46a3da549370e1!8m2!3d-23.5958049!4d-46.6911532!16s%2Fg%2F11g87c40zl?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full h-14 bg-white text-black hover:bg-gray-50 border border-gray-200 text-base md:text-lg font-semibold px-4 rounded-xl shadow-sm transform hover:scale-[1.02] transition-all duration-300 animate-fade-in animation-delay-700"
          >
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>Veja como Chegar</span>
          </a>
        </div>

        {/* QR Code Section */}
        <Card className="mb-8 shadow-md animate-fade-in animation-delay-500">
          <CardContent className="p-6 text-center">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              QR Code para acessar Cartão Digital
            </h2>

            <div className="mb-4">
              <img
                src={qrCodePlaceholder}
                alt="QR Code para acessar Cartão Digital"
                className="w-48 h-48 mx-auto rounded-lg shadow-sm bg-surface"
              />
            </div>

            <div className="text-text-secondary text-sm space-y-2">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Smartphone className="w-4 h-4 text-primary" />
                <span className="font-medium">Como usar:</span>
              </div>
              <p>1. Aponte a câmera do seu celular para o QR Code</p>
              <p>2. Toque na notificação que aparecer</p>
              <p>3. Será direcionado para nosso cartão digital</p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Section */}
        <div className="text-center text-text-muted text-xs animate-fade-in animation-delay-600">
          <p>
            Cartão digital desenvolvido por{' '}
            <a
              href="https://orbee360-cartao.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium hover:text-primary transition-colors"
            >
              Orbee360
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
