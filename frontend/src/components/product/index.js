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
            <p className="product-description__main__extra-text">
              May be available at a lower price from{" "}
              <span className="alink-normal inline">other sellers</span>,
              potentially without free Prime shipping.{" "}
            </p>
            <p className="product-description__main__extra-text">
              <b>Note:</b> This item is eligible for{" "}
              <b>FREE click and collect</b> without a minimum order.
              <span className="alink-normal inline"> Details</span>
            </p>
            <p className="product-description__main__extra-text">
              <span className="alink-normal inline">New (5) </span>from
              <span className="color-total">£10.03 </span>{" "}
              <b>& FREE Delivery</b>
            </p>

            <ul className="reset-list">
              <li className="flex between">
                <b>Brand</b>
                <p>Funko</p>
              </li>
              <li className="flex between">
                <b>Material</b>
                <p>Vinyl</p>
              </li>
              <li className="flex between">
                <b>Size</b>
                <p>6.4 x 6.4 x 9.5 centimetres</p>
              </li>
              <li className="flex between">
                <b> Item weight </b>
                <p>0.3 Pounds</p>
              </li>
            </ul>
          </div>

          <div className="product-description__about">
            <h2 className="product-description__about-heading">
              About this item
            </h2>
            <ul className="product-description__about-list reset-list">
              <li className="">
                <p>
                  From Dragon Ball Z, Vegetal, as a stylized POP vinyl from
                  Funko
                </p>
              </li>
              <li className="">
                <p>
                  Stylized collectable stands 3 ¾ inches tall, perfect for any
                  Dragon Ball Z fan{" "}
                </p>
              </li>
              <li className="">
                <p>Collect and display all Dragon Ball Z POP Vinyl's </p>
              </li>
              <li className="">
                <p>
                  Funko POP is the 2018 Toy of the Year and People's Choice
                  award winner{" "}
                </p>
              </li>
            </ul>
            <p className="alink-normal">See more product details</p>
          </div>
        </div>
      </div>
      <div className="product-form">
        <h3 className="color-total">$13.99 {id}</h3>
      </div>
    </div>
  );
}

export default Product;
