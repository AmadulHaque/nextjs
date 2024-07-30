"use client";

import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../header/Navbar";
import { CartProvider } from "@/hooks/CartContext";

export default function MainLayout({ children }) {
  return (
    <>
      <CartProvider>
        <Navbar />
        <section>
          <div className="page-content">
            <div className="container-fluid">{children}</div>
          </div>
        </section>
        <Footer />
      </CartProvider>
    </>
  );
}
