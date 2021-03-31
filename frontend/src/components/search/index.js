import React from "react";
import NavigationForm from "./navigation";
import ListProducts from "./list-products";

import "./products.css";

function SearchContainer() {
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
