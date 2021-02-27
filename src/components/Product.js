import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, addToCart }) => {
  return (
    <div className="product__card">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.media.source}
          alt={product.name}
          className="product__card-image"
        />
      </Link>
      <div className="product__card-content">
        <h3 className="product__card-title">
          {product.name.replaceAll("-", " ")}
        </h3>
        <h3 className="product__card-price">
          {product.price.formatted_with_symbol}
        </h3>
        <i
          className="fa fa-cart-plus product__card-icon"
          onClick={addToCart}
        ></i>
      </div>
    </div>
  );
};

export default Product;
