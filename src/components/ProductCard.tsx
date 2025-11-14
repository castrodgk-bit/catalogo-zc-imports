'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, MessageCircle } from 'lucide-react';
import { Product } from '@/lib/types';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, selectedSize);
  };

  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    const message = `Olá! Tenho interesse no produto: ${product.name} - Tamanho: ${selectedSize} - R$ ${product.price.toFixed(2)}`;
    const url = `https://wa.me/5511999999999?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Link href={`/produto/${product.id}`}>
      <div className="group bg-black/40 rounded-lg overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D4AF37]/20">
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-black">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {product.onSale && (
            <div className="absolute top-4 right-4 bg-[#D4AF37] text-black px-3 py-1 rounded-full text-sm font-bold">
              OFERTA
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <h3 className="font-bold text-lg text-white group-hover:text-[#D4AF37] transition-colors">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2">
            {product.originalPrice && (
              <span className="text-white/40 line-through text-sm">
                R$ {product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-[#D4AF37] font-bold text-xl">
              R$ {product.price.toFixed(2)}
            </span>
          </div>

          {/* Size Selector */}
          <div className="flex gap-2">
            {product.sizes.map(size => (
              <button
                key={size}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSize(size);
                }}
                className={`px-3 py-1 rounded border text-sm transition-all ${
                  selectedSize === size
                    ? 'bg-[#D4AF37] text-black border-[#D4AF37]'
                    : 'border-white/20 text-white/60 hover:border-[#D4AF37] hover:text-white'
                }`}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-[#D4AF37] hover:bg-[#B87333] text-black font-bold py-2 px-4 rounded transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Adicionar
            </button>
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-2 rounded transition-colors"
              title="Comprar pelo WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
