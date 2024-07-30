"use client";

import ProductList from '@/services/product';
import React, { useEffect, useState, useCallback } from 'react';
import ProductCard from '../productCard/ProductCard';
import { BarLoader, PropagateLoader } from 'react-spinners';

const overrideStyle = {
  display: 'flex',
  margin: '0 auto',
  height: '0px',
  justifyContent: 'center',
  alignItems: 'center',
  top: '-13px'
};

export default function Product({ page_type = "home" , voltage = [], brand = [] , category = ""  }) {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);

  const fetchData = useCallback(async (pageNumber) => {
    try {
      setLoader(true);
   
      const { data } = await ProductList(pageNumber, category,voltage,brand);

      setProducts(prevProducts => 
        pageNumber === 1
          ? data
          : {
            ...data,
            data: [...(prevProducts.data || []), ...data.data] 
          }
      );

      setLoader(false);
    } catch (error) {
      console.error('Error fetching product list', error);
      setLoader(false);

    }
  }, [category,voltage,brand]);

  useEffect(() => {
    setPage(1);
    fetchData(1); 
  }, [category, fetchData]);

  const handleExploreMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };

  return (
    <>
     {loader && <BarLoader  color="#41c946" height={5} loading speedMultiplier={1} width={ page_type=='home' ? 1300 : '800px'}/> }
     <br />
      <div className="productList">
        {products?.data?.map((product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      {page < products?.last_page && (
        <div className="d-flex justify-content-center mt-4">
          <button onClick={handleExploreMore} disabled={loader} className="btn btn-primary btn-md">
            Explore More {loader && <PropagateLoader color="#fff" cssOverride={overrideStyle} /> }
          </button>
        </div>
      )}
    </>
  );
}
