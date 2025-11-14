'use client';

import Link from 'next/link';
import { ArrowRight, Shield, Truck, Headphones } from 'lucide-react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';
import { CartProvider } from '@/contexts/CartContext';
import { getFeaturedProducts, getOnSaleProducts } from '@/lib/products';

export default function Home() {
  const featuredProducts = getFeaturedProducts();
  const onSaleProducts = getOnSaleProducts();

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0D0D0D]">
        <Navbar />
        <WhatsAppButton />

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-4 pt-16">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-transparent to-transparent" />
          
          <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Estilo que</span>
              <br />
              <span className="text-[#D4AF37]">impõe respeito</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto">
              ZC Imports — o premium do dia a dia
            </p>

            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B87333] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-[#D4AF37]/20"
            >
              Ver Catálogo Completo
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
              <div className="flex flex-col items-center gap-2 text-white/80">
                <Shield className="w-8 h-8 text-[#D4AF37]" />
                <span className="text-sm font-semibold">Pagamento Seguro</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-white/80">
                <Truck className="w-8 h-8 text-[#D4AF37]" />
                <span className="text-sm font-semibold">Envio Rápido</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-white/80">
                <Headphones className="w-8 h-8 text-[#D4AF37]" />
                <span className="text-sm font-semibold">Atendimento Premium</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Mais Vendidos da Semana
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* Special Offers */}
        {onSaleProducts.length > 0 && (
          <section className="py-20 px-4 bg-black/20">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">
                  Ofertas Especiais
                </h2>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {onSaleProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Pronto para elevar seu estilo?
            </h2>
            <p className="text-xl text-white/70">
              Explore nossa coleção completa e encontre as peças perfeitas para você
            </p>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 bg-[#D4AF37] hover:bg-[#B87333] text-black font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105"
            >
              Explorar Catálogo
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#D4AF37]/20 py-8 px-4">
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
