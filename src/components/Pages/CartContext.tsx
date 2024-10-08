import React, { createContext, useState, ReactNode, useMemo } from 'react';

// Define the types
interface Product {
  id: number;
  name: string;
  rating: number;
  description: string;
  price: number;
  image: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateItemQuantity: (id: number, delta: number) => void;
  removeItem: (id: number) => void;
  cartCount: number;
}

export const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, product];
      }
    });
  };

  const updateItemQuantity = (id: number, delta: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Calculate cartCount based on cartItems
  const cartCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateItemQuantity, removeItem, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};
