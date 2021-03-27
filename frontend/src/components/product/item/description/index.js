import React from "react";
import PrimeLogo from "../../../../images/prime-logo.png";
import "./description.css";
function Description({ product }) {
  const {
    title,
    rrp,
    current_price,
    rating,
    details,
    description__about,
  } = product;

  const GenerateMaterial = () => {
    return details.map((detail) => {
      return (
        <li className="flex between">
          <b>{detail[0]}</b>
          <p>{detail[1]}</p>
        </li>
      );
    });
  };

  const GenerateAbout = () => {
    return description__about.map((about) => {
      return (
        <li>
          <p>{about}</p>
        </li>
      );
    });
  };

  const GenerateRating = () => {
    return Array(rating)
      .fill()
      .map((_, i) => <p key={i}>⭐</p>);
  };

  return (
    <div className="product-description">
      <div className="product-description__header">
        <h2 className="product-description__heading">{title}</h2>
        <a href="/" className="product-description__link alink-normal">
          Visit store
        </a>
        <div className="product__rating">
          <GenerateRating />
        </div>
      </div>
      <div className="product-description__main">
        <div className="product-description__main__pricing">
          <p>
            RRP: <s>{rrp}</s>
          </p>
          <div className="product-description__primelogo">
            <span className="product-description__primelogo-item">Price:</span>
            <span className="product-description__primelogo-item color-total">
              £{current_price}
            </span>
            <img
              className="product-description__primelogo-item"
              src={PrimeLogo}
            />
            <span>FREE One-Day</span>
          </div>
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
            <b>Note:</b> This item is eligible for <b>FREE click and collect</b>{" "}
            without a minimum order.
            <span className="alink-normal inline"> Details</span>
          </p>
          <p className="product-description__main__extra-text">
            <span className="alink-normal inline">New (5) </span>from
            <span className="color-total">£10.03 </span> <b>& FREE Delivery</b>
          </p>

          <ul className="reset-list">
            <GenerateMaterial />
          </ul>
        </div>

        <div className="product-description__about">
          <h2 className="product-description__about-heading">
            About this item
          </h2>
          <ul className="product-description__about-list reset-list">
            <GenerateAbout />
          </ul>
          <p className="alink-normal">See more product details</p>
        </div>
      </div>
    </div>
  );
}

export default Description;
