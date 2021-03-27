import React from "react";
import { useStateValue } from "../../../../StateProvider";
import PrimeLogo from "../../../../images/prime-logo.png";
import baseUrl from "../../../../adapters";
import "./form.css";

// create a function that determines time bewteen now and 24 hours
function Form({ product, stock }) {
  const {
    title,
    image,

    current_price: price,
    rating,
  } = product;
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: product.id,
        title: title,
        image: baseUrl + image.url,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product-form">
      <h3 className="color-total">{price}</h3>
      <div className="product-description__primelogo">
        <img className="product-description__primelogo-item" src={PrimeLogo} />
        <span>FREE One-Day</span>
      </div>
      <div className="product-form__delivery">
        <p>
          FREE delivery: <b>Tomorrow</b> Order within 8 hrs 29 mins{" "}
          <span className="alink-normal">Details</span>
        </p>
      </div>
      <div className="product-form__stock color-success">
        <p>Only {stock} left in stock (more on the way). </p>
      </div>

      <div className="product-form__quantity">
        <label htmlFor="quantity">Quantity: </label>
        <select name="quantity" id="quantity">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="btns">
        <button
          className="btn-amazon btn-amazon-pill btn-amazon-active"
          onClick={() => {
            addToBasket();
          }}
        >
          Add to Basket
        </button>
        <button className="btn-amazon btn-amazon-pill btn-amazon-buynow">
          Buy Now
        </button>
      </div>

      <div className="secure-box">
        <img
          src="https://img.icons8.com/ios/250/000000/lock.png"
          alt=""
          className="padlock"
        />
        <p className="alink-normal">Secure transaction</p>
      </div>

      <p className="product-form__dispatch">
        Dispatched from and sold by Amazon.{" "}
      </p>
      <button>Add to list</button>
    </div>
  );
}

export default Form;
