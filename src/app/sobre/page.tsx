'use client';

import { Shield, Truck, Headphones, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider } from '@/contexts/CartContext';

export default function SobrePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0D0D0D]">
        <Navbar />
        <WhatsAppButton />

        <div className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Sobre a <span className="text-[#D4AF37]">ZC Imports</span>
              </h1>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-8" />
            </div>

            {/* Story */}
            <div className="bg-black/40 border border-[#D4AF37]/20 rounded-lg p-8 mb-12">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                A <span className="text-[#D4AF37] font-semibold">ZC Imports</span> nasceu pra entregar estilo e qualidade de verdade — peças premium, inspiradas nas grandes marcas, com preço justo e envio rápido pra todo o Brasil.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Acreditamos que todo homem merece ter acesso a roupas que transmitem confiança, sofisticação e presença. Por isso, selecionamos cuidadosamente cada peça do nosso catálogo, garantindo tecidos de alta qualidade, acabamentos impecáveis e designs atemporais.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Mais do que vender roupas, queremos fazer parte da sua jornada de estilo. Seja para o dia a dia, para aquela ocasião especial ou simplesmente para se sentir bem consigo mesmo — a ZC Imports está aqui para elevar o seu guarda-roupa.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <div className="bg-black/40 border border-[#D4AF37]/20 rounded-lg p-6 text-center">
                <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Qualidade Premium</h3>
                <p className="text-white/70">
                  Tecidos selecionados e acabamentos impecáveis em cada peça
                </p>
              </div>

              <div className="bg-black/40 border border-[#D4AF37]/20 rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Pagamento Seguro</h3>
                <p className="text-white/70">
                  Suas informações protegidas com criptografia de ponta
                </p>
              </div>

              <div className="bg-black/40 border border-[#D4AF37]/20 rounded-lg p-6 text-center">
                <Truck className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Envio Rápido</h3>
                <p className="text-white/70">
                  Entrega ágil para todo o Brasil com rastreamento completo
                </p>
              </div>

              <div className="bg-black/40 border border-[#D4AF37]/20 rounded-lg p-6 text-center">
                <Headphones className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-white font-bold text-xl mb-2">Atendimento Premium</h3>
                <p className="text-white/70">
                  Suporte dedicado para tirar todas as suas dúvidas
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#B87333]/10 border border-[#D4AF37]/30 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Nossa Missão</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Democratizar o acesso ao estilo premium masculino, oferecendo peças de alta qualidade com preços justos, atendimento excepcional e uma experiência de compra que reflete a sofisticação dos nossos produtos.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t border-[#D4AF37]/20 py-8 px-4 mt-12">
          <div className="max-w-7xl mx-auto text-center text-white/60">
            <p className="text-sm">
              © 2024 ZC Imports. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </CartProvider>
  );
}
