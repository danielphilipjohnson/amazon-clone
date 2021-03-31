import React, { useState, useEffect } from "react";
import Description from "./description";
import Form from "./form";
import ProductImage from "../../shared/product-image";
import "./item.css";
import Data from "../../../adapters/productAdapter/";

function Item({ id }) {
  const [product, setProduct] = useState(null);

  const fetchProduct = (id) => {
    setProduct(
      Data.filter(function (item) {
        if (item.id == id) {
          return item;
        }
      })[0]
    );
  };
  useEffect(() => {
    fetchProduct(id);
  }, []);

  if (product) {
    return (
      <div className="product-container">
        <ProductImage
          url={product.image.url}
          alt={product.title}
          classname="product__fullimage"
        />

        <Description product={product} />
        <Form
          product={product}
          price={product.current_price}
          stock={product.stock}
        />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default Item;
