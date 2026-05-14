'use client';

import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  discount?: number;
  quantity: number;
  image: string;
  weight?: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  subtotal: number;
  tax: number;
  total: number;
}

interface CartContextType {
  cart: Cart;
  addToCart: (item: Omit<CartItem, 'quantity'>, quantity: number) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Calculate cart totals
  const cart = useMemo(() => {
    const itemsWithCalculations = items.map(item => {
      const itemPrice = item.price * (1 - (item.discount || 0) / 100);
      return {
        ...item,
        finalPrice: itemPrice,
      };
    });

    const subtotal = itemsWithCalculations.reduce(
      (sum, item) => sum + item.finalPrice * item.quantity,
      0
    );

    const tax = subtotal * 0.23; // 23% VAT for Portugal
    const total = subtotal + tax;

    return {
      items,
      totalItems: items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal,
      tax,
      total,
    };
  }, [items]);

  // Add to cart or update quantity if already exists
  const addToCart = useCallback((item: Omit<CartItem, 'quantity'>, quantity: number) => {
    setItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id);

      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }

      return [...prevItems, { ...item, quantity }];
    });
  }, []);

  // Remove item from cart
  const removeFromCart = useCallback((id: string) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  }, []);

  // Update item quantity
  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, [removeFromCart]);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setItems([]);
    setIsCartOpen(false);
  }, []);

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isCartOpen,
    setIsCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
