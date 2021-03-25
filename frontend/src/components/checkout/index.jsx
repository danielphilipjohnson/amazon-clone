import React from "react";

import Cart from "./cart";
import CheckoutSubtotal from "./checkoutSubtotal";

import BrowsingHistory from "../sitewide/browsering-history";
import { useStateValue } from "../../StateProvider";

import "./checkout.css";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423493668_.jpg"
          />
          <Cart />
        </div>
        <div className="checkout__right">
          <CheckoutSubtotal user={user} basket={basket} />
        </div>
      </div>
      <BrowsingHistory />
    </>
  );
}

export default Checkout;
