import { useState } from 'react';

/**
 * Mock Cart Context for standalone development
 * Provides a functional cart implementation with sample data
 */
export function MockCartProvider({ children, initialItems = [] }) {
  const [cartItems, setCartItems] = useState(initialItems);

  const mockCartContext = {
    cartItems,
    addToCart: (product) => {
      console.log('[MOCK] Added to cart:', product);
      setCartItems(prev => {
        const existing = prev.find(item => item.id === product.id);
        if (existing) {
          return prev.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        }
        return [...prev, { ...product, quantity: 1 }];
      });
    },
    removeFromCart: (id) => {
      console.log('[MOCK] Removed from cart:', id);
      setCartItems(prev => prev.filter(item => item.id !== id));
    },
    updateQuantity: (id, delta) => {
      console.log('[MOCK] Updated quantity:', id, delta);
      setCartItems(prev =>
        prev
          .map(item =>
            item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
          )
          .filter(item => item.quantity > 0)
      );
    },
    clearCart: () => {
      console.log('[MOCK] Cleared cart');
      setCartItems([]);
    },
    totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
    totalPrice: cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
  };

  return children(mockCartContext);
}

/**
 * Simple mock cart context for basic standalone development
 * Shows alerts instead of functional state updates
 */
export const createSimpleMockCartContext = () => ({
  cartItems: [],
  addToCart: (product) => {
    console.log('[MOCK] Added to cart:', product);
    alert(`[STANDALONE MODE] Added ${product.name} to cart!\n\nThis is a mock - run from host for real functionality.`);
  },
  removeFromCart: (id) => console.log('[MOCK] Removed from cart:', id),
  updateQuantity: (id, delta) => console.log('[MOCK] Updated quantity:', id, delta),
  clearCart: () => console.log('[MOCK] Cleared cart'),
  totalItems: 0,
  totalPrice: 0,
});
