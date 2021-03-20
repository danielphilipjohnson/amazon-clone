import React from "react";
import "./product.css";
import { useStateValue } from "../../../StateProvider";
import FadeIn from "react-fade-in";

function CheckoutProduct({ id, image, title, price, rating, hideButton }, ref) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <FadeIn>
      <div className="checkoutProduct" key={id}>
        <img className="checkoutProduct__image" src={image} />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasket}>Remove from Basket</button>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default CheckoutProduct;
