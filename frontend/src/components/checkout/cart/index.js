import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "../product";
import RemindLogin from "../remind-login";
import { useStateValue } from "../../../StateProvider";

import "./cart.css";

function Cart() {
  const [{ basket, user }] = useStateValue();

  /* if a user has an email he is logged in */
  if (user?.email) {
    /* if there is items in the basket display items */
    if (basket.length > 0) {
      return (
        <div className="cart__signedin">
          <div className="empty-cart__heading">
            <h2 className="cart__signedin-title">Shopping Basket</h2>
            <p className="alink-normal"> Deselect all items</p>
          </div>

          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      );
    } else {
      /* if there is no items in the basket display to user the basket is empty */
      return (
        <div className="cart__signedin">
          <h2 className="cart__signedin-title">Your Amazon Basket is empty.</h2>
          <p>
            Check your Saved for later items below or {/* */}
            <Link to="/login" className="alink-normal cart__signedin-link">
              continue shopping.
            </Link>
          </p>
        </div>
      );
    }
    /* if the user isnt signed in show an empty cart and remind user to login */
  } else {
    if (basket.length > 0) {
      return (
        <>
          <RemindLogin title="To checkout please login" />
          <div className="cart__signedin">
            <div className="empty-cart__heading">
              <h2 className="cart__signedin-title">Shopping Basket</h2>
              <p className="alink-normal"> Deselect all items</p>
            </div>

            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </>
      );
    } else {
      return <RemindLogin title="Your shopping basket is empty" />;
    }
  }
}

export default Cart;
