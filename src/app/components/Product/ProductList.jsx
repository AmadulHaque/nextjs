"use client"
import React, { useState } from 'react'
import Category from '../Home/Category';
import Accordion from "react-bootstrap/Accordion";
import Product from './Product';
import Brands from '../Accordion/Brands';
import "./../Accordion/Accordion.css";
import Voltage from '../Accordion/Voltage';

export default function ProductList() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedBrand, setSelectedBrand] = useState([]);
    const [selectedVoltages, setSelectedVoltages] = useState([]);

    const handleCategoryChange = (id) => {
        setSelectedCategory(id);
    };

    const handleBrandChange = (ids) => {
        setSelectedBrand(ids);
    };

    const handleVoltageChange = (ids) => {
        setSelectedVoltages(ids);
    };

    return (
        <>
            <div className="filter-area w-25">
              <h4>Filter</h4>
              <div className="mt-4">
                <Accordion defaultActiveKey="0" className="d-flex gap-5 flex-column">
                    <Brands onBrandChange={handleBrandChange} />
                    <Voltage onVoltageChange={handleVoltageChange} />
                </Accordion>
              </div>
            </div>

            <div className="w-75">
                <div className="tab-menus">
                    <Category onCategoryChange={handleCategoryChange} />
                </div>

                <div className="tab-content mt-3">
                    <Product   page_type="product" voltage={selectedVoltages}  brand={selectedBrand} category={selectedCategory} />
                </div>
            </div>
        </>
    )
}
