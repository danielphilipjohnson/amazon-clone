import React from "react";
import FadeIn from "react-fade-in";
import PrimeLogo from "../../../images/prime-logo.png";
import "./product.css";
import { useStateValue } from "../../../StateProvider";

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
    <FadeIn key={id}>
      <div className="checkoutProduct" key={id}>
        <img className="checkoutProduct__image" src={image} />
        <div className="checkoutProduct__info">
          <div className="checkoutProduct__top">
            <p className="checkoutProduct__title alink-normal">{title}</p>
            <p className="checkoutProduct__price">
              <small>$</small>
              <strong>{price}</strong>
            </p>
          </div>
          <p className="color-success">In stock</p>
          <div className="i-con">
            <img src={PrimeLogo} alt="" />
          </div>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <>
              <span className="seperator">| </span>
              <button onClick={removeFromBasket} className="a-color-link">
                Delete
              </button>
              <span className="seperator">| </span>
              <button
                onClick={() => {
                  console.log("to be implemented");
                }}
                className="a-color-link"
              >
                Save for later
              </button>
              <span className="seperator">| </span>
              <button
                onClick={() => {
                  console.log("to be implemented");
                }}
                className="a-color-link"
              >
                See more like this
              </button>
              <span className="seperator">| </span>
            </>
          )}
        </div>
      </div>
    </FadeIn>
  );
}

export default CheckoutProduct;
