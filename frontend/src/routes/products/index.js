import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import NavigationForm from "./navigation";
import ListProducts from "./list-products";

import "./products.css";
function Index() {
  let { path, url } = useRouteMatch();

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

export default Index;
