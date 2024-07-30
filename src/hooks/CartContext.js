"use client"
import { createContext, useContext, useState, useEffect } from 'react';

import { getCart, saveCart, addToCart as addToCartHelper, updateCartQuantity as updateCartQuantityHelper, removeFromCart as removeFromCartHelper, getCartContents as getCartContentsHelper, CartCount as cartCountHelper } from '@/helper/Cart';
// getCartContents, updateCartQuantity, removeFromCart
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartcount, setCartcount] = useState([]);

  useEffect(() => {
    const cartFromStorage = getCart();
    setCart(cartFromStorage);

    const cartCount = cartCountHelper();
    setCartcount(cartCount)
    
  }, []);

  const addToCart = (product) => {
    addToCartHelper(product);
    const updatedCart = getCartContentsHelper();
    setCart(updatedCart);

    const cartCount = cartCountHelper();
    setCartcount(cartCount)
  };

  const updateCartQuantity = (productId, quantity) => {
    updateCartQuantityHelper(productId, quantity);
    const updatedCart = getCartContentsHelper();
    setCart(updatedCart);

    const cartCount = cartCountHelper();
    setCartcount(cartCount)
  };

  const removeFromCart = (productId) => {
    removeFromCartHelper(productId);
    const updatedCart = getCartContentsHelper();
    setCart(updatedCart);

    const cartCount = cartCountHelper();
    setCartcount(cartCount)

  };

  

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCartQuantity, removeFromCart, cartcount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
