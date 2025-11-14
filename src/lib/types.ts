export interface Product {
  id: string;
  name: string;
  category: 'camisetas' | 'bermudas' | 'tenis';
  price: number;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  featured?: boolean;
  onSale?: boolean;
  originalPrice?: number;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}
