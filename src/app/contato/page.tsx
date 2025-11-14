'use client';

import { Mail, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider } from '@/contexts/CartContext';

export default function ContatoPage() {
  const handleWhatsApp = () => {
    const message = 'Olá, quero tirar uma dúvida sobre os produtos ZC Imports.';
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

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
                Entre em <span className="text-[#D4AF37]">Contato</span>
              </h1>
              <p className="text-white/70 text-lg">
                Estamos aqui para ajudar! Escolha o canal de sua preferência.
              </p>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto mt-6" />
            </div>

            {/* Contact Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* WhatsApp */}
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-lg p-8 transition-all hover:scale-105 shadow-xl"
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-bold text-xl mb-2">WhatsApp</h3>
                <p className="text-white/90 mb-4">
                  Atendimento rápido e direto
                </p>
                <span className="text-sm opacity-90">
                  Clique para conversar
                </span>
              </button>

              {/* Email */}
              <a
                href="mailto:contato@zcimports.com.br"
                className="bg-black/40 hover:bg-black/60 border border-[#D4AF37]/20 hover:border-[#D4AF37] text-white rounded-lg p-8 transition-all hover:scale-105 shadow-xl block text-center"
              >
                <Mail className="w-12 h-12 mx-auto mb-4 text-[#D4AF37]" />
                <h3 className="font-bold text-xl mb-2">E-mail</h3>
                <p className="text-white/70 mb-4">
                  Envie sua mensagem
                </p>
                <span className="text-sm text-[#D4AF37]">
                  contato@zcimports.com.br
                </span>
              </a>
            </div>

            {/* Social Media */}
            <div className="bg-black/40 border border-[#D4AF37]/20 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white text-center mb-6">
                Siga-nos nas Redes Sociais
              </h2>
              <div className="flex justify-center gap-6">
                <a
                  href="https://www.instagram.com/zcimports1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-4 rounded-full transition-all hover:scale-110 shadow-xl"
                  aria-label="Instagram"
                >
                  <Instagram className="w-8 h-8" />
                </a>
                <a
                  href="https://facebook.com/zcimports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1877F2] hover:bg-[#166FE5] text-white p-4 rounded-full transition-all hover:scale-110 shadow-xl"
                  aria-label="Facebook"
                >
                  <Facebook className="w-8 h-8" />
                </a>
              </div>
            </div>

            {/* Info Box */}
            <div className="mt-12 bg-gradient-to-r from-[#D4AF37]/10 to-[#B87333]/10 border border-[#D4AF37]/30 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">
                Horário de Atendimento
              </h3>
              <p className="text-white/80 mb-2">
                Segunda a Sexta: 9h às 18h
              </p>
              <p className="text-white/80 mb-4">
                Sábado: 9h às 13h
              </p>
              <p className="text-white/60 text-sm">
                Respondemos todas as mensagens em até 24 horas úteis
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
