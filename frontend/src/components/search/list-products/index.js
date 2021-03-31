import React, { useEffect, useState } from "react";
import Product from "./product";
import LoadingProducts from "../../shared/loading-product";
import data from "../../../adapters/productAdapter";

import { useLocation } from "react-router-dom";

function ListProducts() {
  const [product, setProduct] = useState(null);
  const location = useLocation();

  const fetchMatchedProducts = async () => {
    // use this to get the correct products
    // examples
    //http://localhost:3000/search?category=technology
    //http://localhost:1337/products?category=Electronics
    console.log(location.search);
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
    return <LoadingProducts />;
  }
}

export default ListProducts;
