'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ShoppingCart, MessageCircle, ArrowLeft, Check, Plus, Minus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { CartProvider, useCart } from '@/contexts/CartContext';
import { getProductById } from '@/lib/products';

function ProductPageContent() {
  const params = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const product = getProductById(params.id as string);

  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Produto não encontrado</h1>
          <button
            onClick={() => router.push('/catalogo')}
            className="text-[#D4AF37] hover:underline"
          >
            Voltar ao catálogo
          </button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product, selectedSize);
    }
    setShowAddedMessage(true);
    setTimeout(() => setShowAddedMessage(false), 3000);
  };

  const handleWhatsApp = () => {
    const total = (product.price * quantity).toFixed(2);
    const message = `Olá! Tenho interesse no produto: ${product.name} - Tamanho: ${selectedSize} - Quantidade: ${quantity} - Total: R$ ${total}`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const totalPrice = product.price * quantity;

  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <WhatsAppButton />

      <div className="pt-24 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-white/70 hover:text-[#D4AF37] mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-black border border-[#D4AF37]/20">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.onSale && (
                  <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-4 py-2 rounded-full text-sm font-bold">
                    OFERTA
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`relative w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === idx
                          ? 'border-[#D4AF37]'
                          : 'border-white/20 hover:border-[#D4AF37]/50'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${product.name} - ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-white mb-4">
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-3">
                  {product.originalPrice && (
                    <span className="text-white/40 line-through text-xl">
                      R$ {product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-[#D4AF37] font-bold text-3xl">
                    R$ {product.price.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-white/80 text-lg leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-white font-semibold mb-3">
                  Selecione o Tamanho
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        selectedSize === size
                          ? 'bg-[#D4AF37] text-black'
                          : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div>
                <h3 className="text-white font-semibold mb-3">
                  Quantidade
                </h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center bg-white/10 rounded-lg">
                    <button
                      onClick={decrementQuantity}
                      className="p-3 hover:bg-white/20 transition-colors rounded-l-lg"
                    >
                      <Minus className="w-5 h-5 text-white" />
                    </button>
                    <span className="px-6 py-3 text-white font-bold text-lg">
                      {quantity}
                    </span>
                    <button
                      onClick={incrementQuantity}
                      className="p-3 hover:bg-white/20 transition-colors rounded-r-lg"
                    >
                      <Plus className="w-5 h-5 text-white" />
                    </button>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white/60 text-sm">Total</span>
                    <span className="text-[#D4AF37] font-bold text-2xl">
                      R$ {totalPrice.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-[#D4AF37] hover:bg-[#B87333] text-black font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Adicionar ao Carrinho
                </button>

                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Comprar pelo WhatsApp
                </button>

                {showAddedMessage && (
                  <div className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded-lg flex items-center gap-2">
                    <Check className="w-5 h-5" />
                    {quantity > 1 ? `${quantity} produtos adicionados` : 'Produto adicionado'} ao carrinho!
                  </div>
                )}
              </div>

              {/* Features */}
              <div className="border-t border-white/10 pt-6 space-y-3">
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span>Tecido premium de alta qualidade</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span>Envio rápido para todo o Brasil</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full" />
                  <span>Garantia de qualidade ZC Imports</span>
                </div>
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

export default function ProductPage() {
  return (
    <CartProvider>
      <ProductPageContent />
    </CartProvider>
  );
}
