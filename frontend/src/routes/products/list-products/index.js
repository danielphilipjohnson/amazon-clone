import React, { useEffect, useState } from "react";
import Product from "./product";
import data from "../../../adapters/productAdapter";

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
    return <h1>loading</h1>;
  }
}

export default ListProducts;