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

// import Product from "./product";

// import data from "../../adapters/productAdapter";

import "./products.css";
function Index() {
  let { path, url } = useRouteMatch();
  // const [product, setProduct] = useState(null);

  // const fetchMatchedProducts = (id) => {
  //   setProduct(Data[id]);
  // };
  // useEffect(() => {
  //   fetchMatchedProducts(id);
  // }, []);

  // const RenderProducts = () => {
  //   return data.map((item) => {
  //     // console.log(item);
  //     return <Product productInformation={item} />;
  //   });
  // };
  return (
    <div>
      <NavigationForm />

      <div className="product__container">
        <ListProducts />
      </div>
      {/* <p>List of products</p>
      <ul>
        <li>
          <Link to={`${url}/1`}>Product 1</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>Product 2</Link>
        </li>
        <li>
          <Link to={`${url}/3`}>Project 3</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Index;
