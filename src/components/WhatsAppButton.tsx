'use client';

import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  message?: string;
  className?: string;
}

export default function WhatsAppButton({ 
  message = 'Quero conhecer o catálogo ZC Imports',
  className = ''
}: WhatsAppButtonProps) {
  const phoneNumber = '5511999999999'; // Substitua pelo número real
  
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center ${className}`}
      aria-label="Contato WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
