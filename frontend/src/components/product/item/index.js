import React, { useState, useEffect } from "react";
import Description from "./description";
import Form from "./form";

import formatImagePathFromBackend from "../../../utils/formatImagePathFromBackend";
import "./item.css";
import { getProductsByID } from "../../../adapters/productAdapter/";

function Item({ id }) {
  const [product, setProduct] = useState(null);

  const fetchProduct = (id) => {
    getProductsByID(id)
      .then((data) => {
        console.log(data);
        setProduct(data[0]);
      })
      .catch((error) => {
        // dispatch alert
      });
  };
  useEffect(() => {
    fetchProduct(id);
  }, [id]);

  if (product) {
    return (
      <div className="product-container">
        <img
          src={formatImagePathFromBackend(product.image.url)}
          alt={product.title}
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
