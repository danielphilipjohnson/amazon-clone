import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "../product";

import { useStateValue } from "../../../StateProvider";

import checkoutImage from "../../../images/checkout/shopping.svg";
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
    return (
      <div className="empty-cart">
        <div className="left">
          <a href="https://www.freevector.com/grocery-shopping-girl-illustration-vector-29602">
            <img
              className="empty-cart__image"
              src={checkoutImage}
              alt=" shopping cart"
            />
          </a>
        </div>

        <div className="empty-cart__right">
          <h2 className="empty-cart__title">Your shopping basket is empty</h2>
          <Link to="/" className="alink-normal">
            Shop today's deals
          </Link>
          <div className="flex">
            <Link to="/login" className="btn-amazon btn-amazon-active">
              Sign in to your account
            </Link>
            <Link to="/login" className="btn-amazon ">
              Sign up now
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
