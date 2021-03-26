import React from "react";
import PrimeLogo from "../../images/prime-logo.png";

import "./product.css";
function Product({ id }) {
  return (
    <div className="product-container">
      <img
        src="https://source.unsplash.com/random"
        alt=""
        className="product__image"
      />
      <div className="product-description">
        <div className="product-description__header">
          <h2 className="product-description__heading">
            Funko 39048 POP Vinyl: Games: Fortnite: Loot Lama Collectible
            Figure, Multicolour
          </h2>
          <a href="/" className="product-description__link alink-normal">
            Visit store
          </a>
          <p>⭐⭐⭐⭐</p>
        </div>
        <div className="product-description__main">
          <div className="product-description__main__pricing">
            <p>
              RRP: <s>£29.19</s>
            </p>
            <p className="product-description__primelogo">
              <span className="product-description__primelogo-item">
                Price:
              </span>
              <span className="product-description__primelogo-item color-total">
                £13.99
              </span>
              <img
                className="product-description__primelogo-item"
                src={PrimeLogo}
              />
              <span>FREE One-Day</span>
            </p>
            <p>
              You Save: <span className="color-total">£15.20(52%)</span>
            </p>
          </div>

          <div className="product-description__main__extra">
            <p>
              May be available at a lower price from{" "}
              <span className="alink-normal inline">other sellers</span>,
              potentially without free Prime shipping.{" "}
            </p>
            <p>
              <b>Note:</b> This item is eligible for{" "}
              <b>FREE click and collect</b> without a minimum order.
              <span className="alink-normal inline"> Details</span>
            </p>
            <p>
              {" "}
              <span className="alink-normal inline">New (5) </span>from
              <span className="color-total">£10.03 </span>{" "}
              <b>& FREE Delivery</b>
            </p>
          </div>

          <ul>
            <li>
              <p>Brand</p>
              <p>Funko</p>
            </li>
            <li>
              <p>Material</p>
              <p>Vinyl</p>
            </li>
            <li>
              <p>Size</p>
              <p>6.4 x 6.4 x 9.5 centimetres</p>
            </li>
            <li>
              <p> Item weight </p>
              <p>0.3 Pounds</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="product-form">
        <h3 className="color-total">$13.99 {id}</h3>
      </div>
    </div>
  );
}

export default Product;
