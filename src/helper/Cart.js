import toast from "react-hot-toast";

    // Function to get the cart from localStorage
    export  const getCart = () => {
        if (typeof window !== 'undefined') {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
        }
        return [];
    };
  
    // Function to save the cart to localStorage
    export  const saveCart = (cart) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };
  
    // Function to add a product to the cart
    export const addToCart = (product) => {
        const cart = getCart();
        const existingProductIndex = cart.findIndex((item) => item.id === product.id);
    
        if (existingProductIndex >= 0) {
            cart[existingProductIndex].quantity += 1;
            toast.success('Cart update successfully')
        } else {
            cart.push({ ...product, quantity: 1 });
            toast.success('Cart added successfully')
        }
        saveCart(cart);
    };
    
    // Function to update the quantity of a product in the cart
    export const updateCartQuantity = (productId, quantity) => {
        const cart = getCart();
        const productIndex = cart.findIndex((item) => item.id === productId);
    
        if (productIndex >= 0) {
            cart[productIndex].quantity = quantity;
            saveCart(cart);
        }
    };
  
    // Function to remove a product from the cart
    export const removeFromCart = (productId) => {
        let cart = getCart();
        cart = cart.filter((item) => item.id !== productId);
        saveCart(cart);
    };
  
    // Function to get the cart contents
    export const getCartContents = () => {
        return getCart();
    };
  
    // Function to get the cart contents
    export const CartCount = () => {
        const cart = getCart();
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    // Function to get the cart contents
    export const deleteCart = () => {
        localStorage.removeItem('cart'); 
    };
  