import React from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import checkoutImage from "../../../images/checkout/shopping.svg";
import { useStateValue } from "../../../StateProvider";

function Cart() {
  const [{ user }] = useStateValue();
  if (user?.email) {
    return (
      <div className="empty-cart__signedin">
        <h2 className="empty-cart__signedin-title">
          Your Amazon Basket is empty.
        </h2>
        <p>
          Check your Saved for later items below or {/* */}
          <Link to="/login" className="alink-normal empty-cart__signedin-link">
            continue shopping.
          </Link>
        </p>
      </div>
    );
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
          <a href="/" className="alink-normal"></a>
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
