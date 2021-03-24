import React from "react";
import { Link } from "react-router-dom";
import checkoutImage from "../../../images/checkout/shopping.svg";
import { useStateValue } from "../../../StateProvider";

function Cart() {
  const [{ user }] = useStateValue();
  if (user?.email) {
    return <div>Welcome</div>;
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
          <div className="button-group">
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
