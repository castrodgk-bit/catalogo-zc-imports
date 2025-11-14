'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Trash2, Plus, Minus, ShoppingBag, MessageCircle, CreditCard } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider, useCart } from '@/contexts/CartContext';

function CarrinhoPageContent() {
  const router = useRouter();
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  const [checkoutMethod, setCheckoutMethod] = useState<'payment' | 'whatsapp' | null>(null);

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) return;

    let message = 'Olá, quero finalizar meu pedido:\n\n';
    
    items.forEach(item => {
      message += `${item.quantity}x ${item.product.name} (${item.size}) - R$ ${(item.product.price * item.quantity).toFixed(2)}\n`;
    });
    
    message += `\nTotal: R$ ${total.toFixed(2)}`;

    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handlePaymentCheckout = () => {
    // Aqui você integraria com Mercado Pago, Stripe, etc.
    alert('Integração com gateway de pagamento será implementada aqui!');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#0D0D0D]">
        <Navbar />
        <WhatsAppButton />

        <div className="pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center py-20">
            <ShoppingBag className="w-24 h-24 text-white/20 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-white mb-4">
              Seu carrinho está vazio
            </h1>
            <p className="text-white/70 mb-8">
              Adicione produtos incríveis ao seu carrinho!
            </p>
            <button
              onClick={() => router.push('/catalogo')}
              className="bg-[#D4AF37] hover:bg-[#B87333] text-black font-bold px-8 py-3 rounded-lg transition-all"
            >
              Explorar Catálogo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <WhatsAppButton />

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Meu Carrinho</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div
                  key={`${item.product.id}-${item.size}`}
                  className="bg-black/40 border border-[#D4AF37]/20 rounded-lg p-4 flex gap-4"
                >
                  {/* Image */}
                  <div className="relative w-24 h-32 rounded-lg overflow-hidden bg-black flex-shrink-0">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.product.name}
                      </h3>
                      <p className="text-white/60 text-sm mb-2">
                        Tamanho: {item.size}
                      </p>
                      <p className="text-[#D4AF37] font-bold">
                        R$ {item.product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="bg-white/10 hover:bg-white/20 text-white p-1 rounded transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-white font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="bg-white/10 hover:bg-white/20 text-white p-1 rounded transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.product.id, item.size)}
                        className="text-red-500 hover:text-red-400 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-black/40 border border-[#D4AF37]/20 rounded-lg p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-white mb-6">Resumo</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-white/70">
                    <span>Subtotal</span>
                    <span>R$ {total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/70">
                    <span>Frete</span>
                    <span className="text-[#D4AF37]">Calcular no checkout</span>
                  </div>
                  <div className="border-t border-white/10 pt-3 flex justify-between text-white font-bold text-xl">
                    <span>Total</span>
                    <span className="text-[#D4AF37]">R$ {total.toFixed(2)}</span>
                  </div>
                </div>

                {!checkoutMethod ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => setCheckoutMethod('payment')}
                      className="w-full bg-[#D4AF37] hover:bg-[#B87333] text-black font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <CreditCard className="w-5 h-5" />
                      Pagar Online
                    </button>
                    <button
                      onClick={() => setCheckoutMethod('whatsapp')}
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Finalizar no WhatsApp
                    </button>
                  </div>
                ) : checkoutMethod === 'payment' ? (
                  <div className="space-y-4">
                    <p className="text-white/70 text-sm text-center">
                      Escolha a forma de pagamento:
                    </p>
                    <button
                      onClick={handlePaymentCheckout}
                      className="w-full bg-[#D4AF37] hover:bg-[#B87333] text-black font-bold py-3 px-4 rounded-lg transition-all"
                    >
                      Cartão / Pix / Boleto
                    </button>
                    <button
                      onClick={() => setCheckoutMethod(null)}
                      className="w-full text-white/70 hover:text-white text-sm transition-colors"
                    >
                      Voltar
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-white/70 text-sm text-center">
                      Seu pedido será enviado via WhatsApp com todos os detalhes.
                    </p>
                    <button
                      onClick={handleWhatsAppCheckout}
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-3 px-4 rounded-lg transition-all"
                    >
                      Enviar Pedido
                    </button>
                    <button
                      onClick={() => setCheckoutMethod(null)}
                      className="w-full text-white/70 hover:text-white text-sm transition-colors"
                    >
                      Voltar
                    </button>
                  </div>
                )}

                <button
                  onClick={clearCart}
                  className="w-full mt-6 text-red-500 hover:text-red-400 text-sm transition-colors"
                >
                  Limpar Carrinho
                </button>
              </div>
            </div>
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
  );
}

export default function CarrinhoPage() {
  return (
    <CartProvider>
      <CarrinhoPageContent />
    </CartProvider>
  );
}
