import React from "react";
import ProductItem from "./item";
import ProductInformation from "./information";
import ProductList from "../shared/product-list";

import "./product.css";
function Product({ id }) {
  return (
    <>
      <div className="page">
        <div className="container">
          <ProductItem id={id} />
          <ProductInformation id={id} />

          <ProductList title="Customers who viewed this item also viewed" />
          <ProductList title="More items to explore" />
          <ProductList title="Products related to this item" />
        </div>
      </div>
    </>
  );
}

export default Product;
