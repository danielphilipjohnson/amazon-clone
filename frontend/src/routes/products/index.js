import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import SearchContainer from "../../components/search";

function Index() {
  let { path, url } = useRouteMatch();

  return (
    <SearchContainer />
    // <div className="search-body">
    //   <div className="container search__container">
    //     <NavigationForm />

    //     <div className="product__container">
    //       <ListProducts />
    //     </div>
    //   </div>
    // </div>
  );
}

export default Index;
