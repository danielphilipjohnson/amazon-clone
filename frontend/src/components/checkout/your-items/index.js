import React from "react";
import { useStateValue } from "../../../StateProvider";
import CheckoutProduct from "../../shared/product/index";
import "./your-items.css";

function YourItems() {
  // make this saved items
  let [{ basket }] = useStateValue();

  return (
    <div className="customer-items">
      <div className="customer-items__header">
        <h2 className="customer-items__heading">Your items</h2>
        <div className="btn-group">
          <button className="btn-tab btn-tab-active">
            Saved for later (26 items){" "}
          </button>
          <button className="btn-tab">Buy it again </button>
        </div>
      </div>
      {basket.map((item) => (
        <CheckoutProduct
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default YourItems;
