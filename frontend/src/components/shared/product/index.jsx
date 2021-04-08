import React from "react";
import FadeIn from "react-fade-in";
import PrimeLogo from "../../../images/prime-logo.png";
import { Link } from "react-router-dom";
import "./product.css";
import { useStateValue } from "../../../StateProvider";

function CheckoutProduct(
  { id, image, title, price, rating, hideButton, quantity },
  ref
) {
  const [{ _ }, dispatch] = useStateValue();

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
        <img className="checkoutProduct__image" src={image} alt={title} />
        <div className="checkoutProduct__info">
          <div className="checkoutProduct__top">
            <Link
              to={`/product/${id}`}
              className="checkoutProduct__title alink-normal"
            >
              {title}
            </Link>

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
                <p key={i}>
                  <span role="img" aria-labelledby="star rating">
                    🌟
                  </span>
                </p>
              ))}
          </div>
          {!hideButton && (
            <>
              <span className="seperator">| </span>
              <select name="" id="" value={quantity}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>

              <span className="seperator">| </span>
              <button
                onClick={() => removeFromBasket()}
                className="a-color-link"
              >
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
