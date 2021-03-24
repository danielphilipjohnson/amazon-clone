import React from "react";
import { Link } from "react-router-dom";
import checkoutImage from "../../../images/checkout/shopping.svg";
function RemindLogin({ title }) {
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
        <h2 className="empty-cart__title">{title}</h2>
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

export default RemindLogin;
