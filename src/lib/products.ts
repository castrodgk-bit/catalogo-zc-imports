import { Product } from './types';

export const products: Product[] = [
  // Camisetas
  {
    id: '1',
    name: 'Camiseta ZC Premium Preta',
    category: 'camisetas',
    price: 84.90,
    originalPrice: 99.90,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&h=800&fit=crop',
    ],
    description: 'Tecido Premium, corte reto e presença em cada detalhe, do logo, ao caimento no corpo. Tecido Peruana 30.1',
    sizes: ['P', 'M', 'G', 'GG'],
    featured: true,
    onSale: true,
  },
  {
    id: '2',
    name: 'Camiseta ZC Oversized Branca',
    category: 'camisetas',
    price: 79.90,
    originalPrice: 89.90,
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&h=800&fit=crop',
    ],
    description: 'Modelagem oversized moderna. Conforto absoluto com estilo urbano premium.',
    sizes: ['P', 'M', 'G', 'GG'],
    featured: true,
    onSale: true,
  },
  {
    id: '3',
    name: 'Camiseta ZC Logo Bordado',
    category: 'camisetas',
    price: 94.90,
    originalPrice: 119.90,
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=800&fit=crop',
    ],
    description: 'Logo bordado em alto relevo. Exclusividade e sofisticação em cada fio.',
    sizes: ['P', 'M', 'G', 'GG'],
    onSale: true,
  },
  {
    id: '4',
    name: 'Camiseta ZC Gola Redonda Cinza',
    category: 'camisetas',
    price: 79.90,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&h=800&fit=crop',
    ],
    description: 'Clássico atemporal. Tecido respirável e acabamento impecável.',
    sizes: ['P', 'M', 'G', 'GG'],
  },

  // Bermudas
  {
    id: '5',
    name: 'Bermuda Cargo ZC Preta',
    category: 'bermudas',
    price: 119.90,
    originalPrice: 129.90,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=600&h=800&fit=crop',
    ],
    description: 'Múltiplos bolsos táticos. Tecido resistente e design urbano premium.',
    sizes: ['P', 'M', 'G', 'GG'],
    featured: true,
    onSale: true,
  },
  {
    id: '6',
    name: 'Bermuda ZC Moletom Premium',
    category: 'bermudas',
    price: 119.90,
    originalPrice: 149.90,
    image: 'https://images.unsplash.com/photo-1591195851547-33a0c8c7c7e1?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1591195851547-33a0c8c7c7e1?w=600&h=800&fit=crop',
    ],
    description: 'Conforto máximo com estilo. Moletom de alta gramatura e caimento perfeito.',
    sizes: ['P', 'M', 'G', 'GG'],
    onSale: true,
  },
  {
    id: '7',
    name: 'Bermuda ZC Sarja Bege',
    category: 'bermudas',
    price: 109.90,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop',
    ],
    description: 'Versatilidade premium. Sarja de alta qualidade para qualquer ocasião.',
    sizes: ['P', 'M', 'G', 'GG'],
  },

  // Tênis
  {
    id: '8',
    name: 'Tênis ZC Urban Black',
    category: 'tenis',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=800&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=800&fit=crop',
    ],
    description: 'Design minimalista premium. Conforto absoluto e estilo atemporal.',
    sizes: ['39', '40', '41', '42', '43', '44'],
  },
  {
    id: '9',
    name: 'Tênis ZC Sport Premium',
    category: 'tenis',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=600&h=800&fit=crop',
    ],
    description: 'Performance e estilo. Tecnologia de amortecimento e design exclusivo.',
    sizes: ['39', '40', '41', '42', '43', '44'],
  },
  {
    id: '10',
    name: 'Tênis ZC Classic White',
    category: 'tenis',
    price: 229.90,
    originalPrice: 279.90,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=800&fit=crop',
    ],
    description: 'Branco premium que não sai de moda. Couro sintético de alta qualidade.',
    sizes: ['39', '40', '41', '42', '43', '44'],
    onSale: true,
  },
];

export const getFeaturedProducts = () => products.filter(p => p.featured);
export const getOnSaleProducts = () => products.filter(p => p.onSale);
export const getProductsByCategory = (category: string) => 
  products.filter(p => p.category === category);
export const getProductById = (id: string) => 
  products.find(p => p.id === id);
