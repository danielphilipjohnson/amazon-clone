import React, { useEffect } from "react";
import { useStateValue } from "../../../StateProvider";
import CheckoutProduct from "../product";
import Subtotal from "../subtotal";

function Basket() {
  console.log("in basket");
  let [{ basket }] = useStateValue();

  return (
    <div className="cart__signedin">
      <div className="cart__heading">
        <h2 className="cart__title">Shopping Basket</h2>
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
      <div className="cart_subtotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default Basket;
