import React from "react";
import "./checkout.css";
import checkoutImage from "../../images/checkout/shopping.svg";
import Subtotal from "../subtotal";
import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./product";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423493668_.jpg"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Shopping Basket</h2>

          {user || (
            <div className="empty-cart">
              <div className="left">
                <a href="https://www.freevector.com/grocery-shopping-girl-illustration-vector-29602">
                  <img
                    className="empty-cart__image"
                    src={checkoutImage}
                    alt=""
                  />
                </a>
              </div>

              <div className="empty-cart__right">
                <h2>Your shopping basket is empty</h2>
                <a href="/">Shop today's deals</a>

                <button className="btn-amazon btn-amazon-active">
                  Sign in to your account
                </button>
                <button className="btn-amazon">Sign up now</button>
              </div>
            </div>
          )}
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
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
