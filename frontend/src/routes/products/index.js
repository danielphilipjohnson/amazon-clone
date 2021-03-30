import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

function Index() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <p>List of products</p>
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
      </ul>
    </div>
  );
}

export default Index;
