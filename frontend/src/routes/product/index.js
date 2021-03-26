import React from "react";
import { useParams } from "react-router-dom";
import ProductContainer from "../../components/product";

function Index() {
  let { id } = useParams();
  // fetch
  return <ProductContainer id={id} />;
}

export default Index;
