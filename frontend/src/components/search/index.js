import React from "react";
import { useLocation, useParams } from "react-router-dom";
import NavigationForm from "./navigation";
import ListProducts from "./list-products";

import "./products.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SearchContainer() {
  let { category } = useParams();
  let query = useQuery();

  const getCategory = () => {
    return query.get("category");
  };
  return (
    <div className="search-body">
      <div className="container search__container">
        <NavigationForm />

        <div className="product__container">
          <ListProducts />
        </div>
      </div>
    </div>
  );
}

export default SearchContainer;
