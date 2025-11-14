'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';
import { CartProvider } from '@/contexts/CartContext';
import { products } from '@/lib/products';
import { Filter } from 'lucide-react';

export default function CatalogoPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter(product => {
    // Category filter
    if (selectedCategory !== 'all' && product.category !== selectedCategory) {
      return false;
    }

    // Size filter
    if (selectedSize !== 'all' && !product.sizes.includes(selectedSize)) {
      return false;
    }

    // Price filter
    if (priceRange !== 'all') {
      const price = product.price;
      if (priceRange === 'under100' && price >= 100) return false;
      if (priceRange === '100to200' && (price < 100 || price >= 200)) return false;
      if (priceRange === 'over200' && price < 200) return false;
    }

    return true;
  });

  return (
    <CartProvider>
      <div className="min-h-screen bg-[#0D0D0D]">
        <Navbar />
        <WhatsAppButton />

        <div className="pt-24 pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                Catálogo Completo
              </h1>
              <p className="text-white/70 text-lg">
                Explore nossa coleção premium de roupas masculinas
              </p>
            </div>

            {/* Filters */}
            <div className="mb-8">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="md:hidden flex items-center gap-2 bg-[#D4AF37] text-black px-4 py-2 rounded-lg font-semibold mb-4"
              >
                <Filter className="w-4 h-4" />
                Filtros
              </button>

              <div className={`${showFilters ? 'block' : 'hidden'} md:block bg-black/40 border border-[#D4AF37]/20 rounded-lg p-6 space-y-6`}>
                {/* Category Filter */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Categoria</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'Todos' },
                      { value: 'camisetas', label: 'Camisetas' },
                      { value: 'bermudas', label: 'Bermudas' },
                      { value: 'tenis', label: 'Tênis' },
                    ].map(cat => (
                      <button
                        key={cat.value}
                        onClick={() => setSelectedCategory(cat.value)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          selectedCategory === cat.value
                            ? 'bg-[#D4AF37] text-black'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Tamanho</h3>
                  <div className="flex flex-wrap gap-2">
                    {['all', 'P', 'M', 'G', 'GG', '39', '40', '41', '42', '43', '44'].map(size => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          selectedSize === size
                            ? 'bg-[#D4AF37] text-black'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {size === 'all' ? 'Todos' : size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h3 className="text-white font-semibold mb-3">Faixa de Preço</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { value: 'all', label: 'Todos' },
                      { value: 'under100', label: 'Até R$ 100' },
                      { value: '100to200', label: 'R$ 100 - R$ 200' },
                      { value: 'over200', label: 'Acima de R$ 200' },
                    ].map(range => (
                      <button
                        key={range.value}
                        onClick={() => setPriceRange(range.value)}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                          priceRange === range.value
                            ? 'bg-[#D4AF37] text-black'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="mb-6">
              <p className="text-white/70">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-white/70 text-lg">
                  Nenhum produto encontrado com os filtros selecionados.
                </p>
              </div>
            )}
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
