import React from "react";
import "./checkout.css";

import Cart from "./cart";

import { useStateValue } from "../../StateProvider";
import CheckoutProduct from "./product";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423493668_.jpg"
        />
        <div>
          <Cart />
          {/* {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))} */}
        </div>
      </div>
      <div className="checkout__right">{/* <Subtotal /> */}</div>
    </div>
  );
}

export default Checkout;
