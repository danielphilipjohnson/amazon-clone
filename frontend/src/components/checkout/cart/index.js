import React from "react";
import { Link } from "react-router-dom";
import RemindLogin from "./remind-login";
import YourItems from "./your-items";
import Basket from "./basket";
import IsAuthenticated from "../../../utils/isAuthenticated";

import { useStateValue } from "../../../StateProvider";

import "./cart.css";

function Cart() {
  let [{ basket }] = useStateValue();

  /* if a user has an email he is logged in */
  if (IsAuthenticated()) {
    /* if there is items in the basket display items */
    if (basket.length > 0) {
      return (
        <>
          <Basket />
          <YourItems />
        </>
      );
    } else {
      /* if there is no items in the basket display to user the basket is empty */
      return (
        <div className="cart__signedin">
          <h2 className="cart__title">Your Amazon Basket is empty.</h2>
          <p>
            Check your Saved for later items below or {/* */}
            <Link to="/login" className="alink-normal cart__signedin-link">
              continue shopping.
            </Link>
          </p>
        </div>
      );
    }
    /* user isnt signed in */
  } else {
    /* if the basket is full remind user to login and still display basket */

    if (basket.length > 0) {
      return (
        <>
          <RemindLogin title="To checkout please login" />
          <Basket />
          <YourItems />
        </>
      );
    } else {
      /* if the basket is empty indicate the basket is empty and ask user to login */
      return <RemindLogin title="Your shopping basket is empty" />;
    }
  }
}

export default Cart;
