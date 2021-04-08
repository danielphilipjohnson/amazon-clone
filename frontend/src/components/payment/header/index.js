import React from "react";
import { Link } from "react-router-dom";

import AmazonLogo from "../../../images/amazon-logo-black.png";
import { useStateValue } from "../../../StateProvider";
import { getBasketLength } from "../../../reducer/reducer";

function Index() {
  const [{ basket }] = useStateValue();
  return (
    <div className="payment__header">
      <img src={AmazonLogo} alt="Logo" />
      <h1>
        Checkout (<Link to="/checkout">{getBasketLength(basket)} items</Link>)
      </h1>
    </div>
  );
}

export default Index;
