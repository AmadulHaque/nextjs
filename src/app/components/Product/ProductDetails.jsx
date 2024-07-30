"use client";
import sanitizeHtml from "sanitize-html";
import Image from "next/image";
import React, { useEffect, useState, useCallback } from "react";
import { ProductShow } from "@/services/product";
import NoImage from "@/assets/images/no_image.png";
import { useCart } from "@/hooks/CartContext";
import { getToken, getRole } from "@/helper/SessionHelper";
export default function ProductDetails({ id }) {
  const [product, setProduct] = useState([]);
  const { addToCart } = useCart();
  const [tokenExists, setTokenExists] = useState(false);
  const [roleExists, setRoleExists] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      const { data } = await ProductShow(id);
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product details", error);
    }
  }, [id]);

  useEffect(() => {
    const token = getToken();
    const role = getRole();
    setTokenExists(!!token);
    setRoleExists(role);
    fetchData();
  }, [fetchData]);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const description = sanitizeHtml(product?.description);
  const specification = sanitizeHtml(product?.specification);

  return (
    <>
      <div className="product-details">
        <div className="row">
          <div className="col-5 pe-5">
            <div className="product-image">
              <div className="featureImage">
                <Image
                  src={product.thumbnail ? product.thumbnail : NoImage.src}
                  className="productImage"
                  width={494}
                  height={494}
                  alt={product.slug}
                />
              </div>
              <div className="galleryImages d-flex gap-2 mt-2 flex-wrap">
                {product.url?.map((item, index) => (
                  <div key={index} className="subImage active">
                    <Image
                      src={item}
                      alt={`img${index}`}
                      width={86}
                      height={86}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="product-informations d-flex flex-column gap-4">
              <h6>{product.name}</h6>
              <div className="product-desc">
                <p>{product.name}</p>
              </div>
              <div className="d-flex gap-2">
                <h6>Status : </h6>
                {product.available_stock > 0 ? (
                  <button className="btn btn-primary btn-exx-sm">
                    Instock
                  </button>
                ) : (
                  <div className="alert alert-danger alert-ex-sm" role="alert">
                    Out Of Stock
                  </div>
                )}
              </div>
              <div className="product-prices d-flex gap-5">
                <div className="rg-Price d-flex flex-column gap-3">
                  <p>Regular Price</p>
                  <h5>৳ {product.regular_price}</h5>
                </div>
                <div className="sl-Price d-flex flex-column gap-1">
                  <p>Sale Price</p>
                  <h5>৳ {product.sale_price}</h5>
                </div>

                {tokenExists &&
                  (roleExists === "Dealer" || roleExists === "Super Admin") && (
                    <div className="dl-Price d-flex flex-column gap-1">
                      <p>Dealer Price</p>
                      <h5>৳ {product.dealer_price}</h5>
                    </div>
                  )}
                {/* <div className="dl-Price d-flex flex-column gap-1">
                  <p>Dealer Price</p>
                  <h5>৳ {product.dealer_price}</h5>
                </div> */}
              </div>
              <div className="product-action d-flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary btn-sm"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div>
            <div className="tab-menus">
              <ul className="nav" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active">Specification</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link">Description</a>
                </li>
              </ul>
            </div>
            <div className="tab-content mt-4">
              <div className="product-specification">
                <div dangerouslySetInnerHTML={{ __html: specification }}></div>
                <div dangerouslySetInnerHTML={{ __html: description }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
