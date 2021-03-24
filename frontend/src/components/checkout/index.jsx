import React from "react";
import "./checkout.css";
import { useHistory } from "react-router-dom";

import Cart from "./cart";
import SubTotal from "./subtotal";

import { useStateValue } from "../../StateProvider";

function Checkout() {
  const history = useHistory();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423493668_.jpg"
        />

        <Cart />
      </div>
      <div className="checkout__subtotal">
        <SubTotal />
        <small className="subtotal__gift">
          <input type="checkbox" />
          This order contains a gift
        </small>
        <button
          className="btn-amazon btn-amazon-active f-width"
          onClick={(e) => history.push("/payment")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Checkout;
