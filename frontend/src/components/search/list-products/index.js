import React, { useEffect, useState } from "react";
import {
  useLocation,
  // useParams,
} from "react-router-dom";
import Product from "./product";
import LoadingProducts from "../../shared/loading-product";
import {
  getProducts,
  getProductsByCategory,
} from "../../../adapters/productAdapter";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ListProducts() {
  const [product, setProduct] = useState(null);
  const location = useLocation();
  // let { category } = useParams();
  // filter price range

  //products?price_gte=20

  let query = useQuery();

  const getCategory = () => {
    console.log(query);
    return query.get("category");
  };

  const fetchMatchedProducts = () => {
    if (getCategory() === null || getCategory() === "") {
      // display all products
      getProducts()
        .then((data) => {
          setProduct(data);
        })
        .catch((error) => {
          // dispatch alert
        });
    } else {
      // display by category
      getProductsByCategory(getCategory())
        .then((data) => {
          console.log(data);
          setProduct(data);
        })
        .catch((error) => {});
    }

    console.log(location.search);
  };

  useEffect(() => {
    fetchMatchedProducts();
  }, [fetchMatchedProducts]);

  if (product) {
    return product.map((item) => {
      return <Product productInformation={item} />;
    });
  } else {
    return <LoadingProducts />;
  }
}

export default ListProducts;
