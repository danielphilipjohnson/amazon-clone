import React from "react";

import Cart from "./cart";
import Subtotal from "./subtotal";

import ProductList from "../shared/product-list";
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
          <Subtotal user={user} basket={basket} />
        </div>
      </div>
      <ProductList />
    </>
  );
}

export default Checkout;
