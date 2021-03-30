import React from "react";
import NavigationForm from "./navigation";
import ListProducts from "./list-products";
import "./products.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
  useRouteMatch,
} from "react-router-dom";

function SearchContainer() {
  let { path, url } = useRouteMatch();
  //http://localhost:3000/search?category=technology
  //http://localhost:1337/products?category=Electronics
  const location = useLocation();
  console.log(location);
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
