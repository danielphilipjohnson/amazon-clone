import React from "react";

import { useStateValue } from "../../../../StateProvider";
import CheckoutProduct from "../../../shared/product";
import Subtotal from "../../shared/displaySubtotal";

function Basket() {
  let [{ basket }, dispatch] = useStateValue();
  const clearBasket = () => {
    dispatch({
      type: "EMPTY_BASKET",
    });
  };
  return (
    <div className="cart__signedin">
      <div className="cart__heading">
        <h2 className="cart__title">Shopping Basket</h2>
        <p className="alink-normal" onClick={() => clearBasket()}>
          Deselect all items
        </p>
      </div>

      {basket.map((item) => {
        return (
          <CheckoutProduct
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            quantity={item.quantity}
          />
        );
      })}
      <div className="cart_subtotal">
        <Subtotal />
      </div>
    </div>
  );
}

export default Basket;
