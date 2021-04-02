import React from "react";
import { Link } from "react-router-dom";

import AmazonLogo from "../../../images/amazon-logo-black.png";

function Index({ basketLength }) {
  return (
    <div className="payment__header">
      <img src={AmazonLogo} alt="Logo" />
      <h1>
        Checkout (<Link to="/checkout">{basketLength} items</Link>)
      </h1>
    </div>
  );
}

export default Index;
