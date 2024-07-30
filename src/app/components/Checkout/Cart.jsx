"use client"
import React, { useEffect, useState } from 'react';
import NoImage from "@/assets/images/no_image.png"
import Image from "next/image";

import {useCart} from '@/hooks/CartContext'


export default function Cart() {
    const [cartItems, setCartItems] = useState([]);

    const {cart,updateCartQuantity, removeFromCart } = useCart()
    // 

    useEffect(() => {
        setCartItems(cart);
    }, [cart]); 

    // Function to handle quantity change for an item
    const handleQuantityChange = (productId, quantity) => {
        if (quantity > 0) {
            updateCartQuantity(productId, quantity);
            setCartItems(cart); 
        }
    };

    // Function to handle removal of an item from the cart
    const handleRemoveItem = (productId) => {
        removeFromCart(productId); // Remove item from cart context
        setCartItems(cart); // Update local cart items state
    };

    // Function to calculate total price of items in the cart
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.sale_price * item.quantity, 0);
    };
  return (
    <>
        <form action="#">
            <div className="tableContainer"> 
                {cartItems.map((item) => ( 
                    <div className="cartItem row" key={item.id}>
                        <div className="col">
                            <div className="itemName d-flex gap-2">
                            <div className="img">
                                <Image src={item.thumbnail ? item.thumbnail : NoImage.src}   alt="img" width={64} height={64} />
                            </div>
                            <div className="name">
                                <p className="font-16 fw-500">{item.name}</p>
                                <p className="font-16 mt-1">Voltage: {item.voltage}</p>
                            </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="itemDetails d-flex align-items-center justify-content-between">
                            <div className="itemPrice d-flex flex-column">
                                <p className="font-16 fw-500">৳ {item.sale_price}</p>
                                <del className="font-14">৳ {item.regular_price}</del>
                            </div>
                            <div className="qtyContainer" role="group">
                                <button type="button" className="btn btn-secondary btn-sm decrease-btn" onClick={()=> handleQuantityChange(item.id, item.quantity - 1)} > <Image  width={100} height={100} src="/cart_minus.svg" alt="img" className="w-auto h-auto" />
                                </button>
                                <input id={`qty-${item.id}`} type="number" className="form-control qty" value={item.quantity} onChange={(e)=> handleQuantityChange(item.id, parseInt(e.target.value))} /> <button type="button" className="btn btn-secondary btn-sm increase-btn" onClick={()=> handleQuantityChange(item.id, item.quantity + 1)} > <Image src="/cart_plus.svg" alt="img" width={10} height={10} className="w-auto h-auto" />
                                </button>
                            </div>
                            <div className="delAction d-flex align-items-center justify-content-center">
                                <svg onClick={()=> handleRemoveItem(item.id)} width={25} height={24} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path className="del" d="M19.7227 5.31094H15.9727V4.37344C15.9727 3.61406 15.3586 3 14.5992 3H11.3414C10.5867 3 9.97266 3.61406 9.97266 4.37344V5.31094H6.22266V6H7.21172L8.31797 19.6266C8.31797 20.3859 8.93203 21 9.69141 21H16.3008C17.0602 21 17.6742 20.3859 17.6742 19.6266L18.7664 6H19.7227V5.31094ZM10.657 4.37344C10.657 3.99375 10.9664 3.68437 11.3414 3.68437H14.5992C14.9789 3.68437 15.2836 3.99375 15.2836 4.37344V5.31094H10.657V4.37344ZM16.9852 19.5891V19.6078V19.6266C16.9852 20.0063 16.6758 20.3156 16.3008 20.3156H9.69141C9.31172 20.3156 9.00703 20.0063 9.00703 19.6266V19.6078V19.5891L7.89609 6H18.0773L16.9852 19.5891Z" fill="#A0A49D" />
                                <path className="del" d="M13.3008 7.5H12.6445V18.7969H13.3008V7.5Z" fill="#A0A49D" />
                                <path className="del" d="M15.973 7.5H15.2887L14.7871 18.7969H15.4715L15.973 7.5Z" fill="#A0A49D" />
                                <path className="del" d="M10.6523 7.5H9.97266L10.4742 18.7969H11.1586L10.6523 7.5Z" fill="#A0A49D" />
                                </svg>
                            </div>
                            </div>
                        </div>
                    </div> 
                ))} 

            </div>

            <div className="cartItem-summary d-flex gap-3 flex-column mt-4">
                <div className="row">
                <div className="col-8">
                    <p className="font-16 fw-500">Sub Total ({cartItems.length} items)</p>
                </div>
                <div className="col-4">
                    <p className="font-16 fw-600 text-black text-end">৳ {calculateTotal()}</p>
                </div>
                </div>
                <div className="row">
                <div className="col-8">
                    <p className="font-16 fw-500">Discount</p>
                </div>
                <div className="col-4">
                    <p className="font-16 fw-600 text-black text-end">৳ 0</p>
                </div>
                </div>
                <div className="row">
                <div className="col-8">
                    <p className="font-16 fw-500">Shipping Fee</p>
                </div>
                <div className="col-4">
                    <p className="font-16 fw-600 text-black text-end">৳ 50</p>
                </div>
                </div>
                <div className="row">
                <div className="col-8">
                    <p className="font-16 fw-500">Total</p>
                </div>
                <div className="col-4">
                    <p className="font-16 fw-600 text-black text-end">৳ {calculateTotal() + 50}</p>
                </div>
                </div>
            </div>
        </form>
    </>
  )
}
