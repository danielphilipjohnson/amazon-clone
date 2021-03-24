import React from "react";
import "./checkout.css";

import Cart from "./cart";

import { useStateValue } from "../../StateProvider";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423493668_.jpg"
        />

        <Cart />
      </div>
      <div className="checkout__right">{/* <Subtotal /> */}</div>
    </div>
  );
}

export default Checkout;
