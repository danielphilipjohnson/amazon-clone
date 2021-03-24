import React from "react";
import { useStateValue } from "../../../StateProvider";
import CheckoutProduct from "../product";
function Basket() {
  const [{ basket }] = useStateValue();
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
}

export default Basket;
