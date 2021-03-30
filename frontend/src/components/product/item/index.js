import React, { useState, useEffect } from "react";
import Description from "./description";
import Form from "./form";
import "./item.css";
import Data from "../../../adapters/productAdapter/";
import baseUrl from "../../../adapters";

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
        <img
          src={baseUrl + product.image.url}
          alt=""
          className="product__fullimage"
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
