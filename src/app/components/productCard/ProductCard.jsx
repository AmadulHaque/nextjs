"use client";
import Image from "next/image";
import "./ProductCard.css";
import Link from "next/link";
import NoImage from "@/assets/images/no_image.png";
import { useCart } from "@/hooks/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  // Use a static image URL for testing
  const productImageSrc = product.thumbnail || NoImage.src;

  return (
    <div className="product">
      <div className="card">
        <Link href={`/product/${product.id}`}>
          <div className="products-img">
            <Image
              src={productImageSrc}
              className="productImage"
              width={275}
              height={275}
              alt={product.slug}
            />
          </div>
        </Link>
        <div className="card-body">
          <Link href={`/product/${product.id}`}>
            <p className="productName">
            {product?.voltage_type_name} {product?.brand?.name} {product.category.name} {product.name}
            </p>
            <div className="d-flex gap-2 align-items-center mt-2 justify-content-center">
              <h6 className="fw-600">৳ {product.sale_price}</h6>
              <del className="font-14 fw-400">৳ {product.regular_price}</del>
            </div>
          </Link>
          {product.price_show == 1 ? (
            <div className="d-flex gap-4 align-items-center mt-2 mb-2 justify-content-between">
              <button
                onClick={handleAddToCart}
                className="btn btn-primary btn-sm w-50"
              >
                Add to cart
              </button>
              <button className="btn btn-outline-secondary btn-sm w-50">
                Buy now
              </button>
            </div>
          ) : (
            <div className="d-flex gap-2 align-items-center mt-2 mb-2 justify-content-center">
              <Link
                href="https://wa.me/+8801329683111"
                className="btn btn-primary btn-sm d-flex align-items-center justify-content-center w-100 "
              >
                Call for price
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
