import React from "react";
import { Link } from "react-router-dom";

import { useStateValue } from "../../../StateProvider";
import CheckoutProduct from "../product";
import "./cart.css";
import checkoutImage from "../../../images/checkout/shopping.svg";

function Cart() {
  const [{ basket, user }] = useStateValue();
  if (user?.email) {
    if (basket.length > 0) {
      return (
        <div className="empty-cart__signedin">
          <div className="empty-cart__heading">
            <h2 className="empty-cart__signedin-title">Shopping Basket</h2>
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
      return (
        <div className="empty-cart__signedin">
          <h2 className="empty-cart__signedin-title">
            Your Amazon Basket is empty.
          </h2>
          <p>
            Check your Saved for later items below or {/* */}
            <Link
              to="/login"
              className="alink-normal empty-cart__signedin-link"
            >
              continue shopping.
            </Link>
          </p>
        </div>
      );
    }
  } else {
    return (
      <div className="empty-cart">
        <div className="left">
          <a href="https://www.freevector.com/grocery-shopping-girl-illustration-vector-29602">
            <img className="empty-cart__image" src={checkoutImage} alt="" />
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
