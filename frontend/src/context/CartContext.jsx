import { createContext, useContext, useState, useEffect } from "react";

const STORAGE_KEY = "monikri_cart";
const CartContext = createContext(null);

function getStoredCart() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(getStoredCart);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, color, size) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) =>
          item.id === product.id && item.color === color && item.size === size,
      );
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prev, { ...product, color, size, qty: 1 }];
    });
  };

  const removeFromCart = (id, color, size) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && item.color === color && item.size === size),
      ),
    );
  };

  const updateQty = (id, color, size, qty) => {
    if (qty < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, qty }
          : item,
      ),
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default function useCart() {
  return useContext(CartContext);
}
