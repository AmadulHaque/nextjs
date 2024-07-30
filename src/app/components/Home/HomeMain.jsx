"use client"
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import Category from './Category';
import Product from '../Product/Product';




export default function HomeMain() {
const [selectedCategory, setSelectedCategory] = useState('');
   

  const handleCategoryChange = (name) => {
    setSelectedCategory(name);
  };

  return (
    <>
        <div className="tab-menus">
          <Category onCategoryChange={handleCategoryChange} />
        </div>
        <div className="tab-content mt-4">
          <Product  page_type="home" voltage=""  brand="" category={selectedCategory} />
        </div>
    </>
  )
}
