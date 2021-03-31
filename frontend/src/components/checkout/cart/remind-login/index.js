import React from "react";
import { Link } from "react-router-dom";
import checkoutImage from "../../../../images/checkout/shopping.svg";
import "./cart-logged-out.css";

function RemindLogin({ title }) {
  return (
    <div className="loggedout__cart">
      <div className="left">
        <a href="https://www.freevector.com/grocery-shopping-girl-illustration-vector-29602">
          <img
            className="loggedout__cart__image"
            src={checkoutImage}
            alt=" shopping cart"
          />
        </a>
      </div>

      <div className="loggedout__cart--right">
        <h2 className="loggedout__cart--title">{title}</h2>
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
