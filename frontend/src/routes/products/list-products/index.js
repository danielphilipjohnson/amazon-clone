import React, { useEffect, useState } from "react";
import Product from "./product";
import data from "../../../adapters/productAdapter";

import "./loading.css";

function ListProducts() {
  const [product, setProduct] = useState(null);

  const fetchMatchedProducts = async () => {
    await setProduct(data);
    // setProduct(null);
  };

  useEffect(() => {
    fetchMatchedProducts();
  }, data);

  if (product) {
    return product.map((item) => {
      return <Product productInformation={item} />;
    });
  } else {
    return (
      <div class="wrapper">
        <div class="wrapper-cell">
          <div class="image animated-background"></div>
          <div class="text">
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
          </div>
        </div>
        <div class="wrapper-cell">
          <div class="image animated-background"></div>
          <div class="text">
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
          </div>
        </div>
        <div class="wrapper-cell">
          <div class="image animated-background"></div>
          <div class="text">
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
            <div class="text-line animated-background"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListProducts;
