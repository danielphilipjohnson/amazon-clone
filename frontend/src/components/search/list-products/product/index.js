import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ProductImage from "../../../shared/product-image";

import PrimeLogo from "../../../../images/prime-logo.png";

function Project({ productInformation }) {
  const DisplayPrice = () => {
    const productInformationStr = productInformation.price
      .toString()
      .split(".");
    return {
      price: productInformationStr[0],
      fraction: productInformationStr[1],
    };
  };
  // need to add details
  const { price, fraction } = DisplayPrice();

  return (
    <Link
      to={`/product/${productInformation.id}`}
      className="alink-none text-base "
    >
      <div className="list-card__product">
        <ProductImage
          classname="list-card__image"
          url={productInformation.image.url}
          alt={productInformation?.title}
        />

        <div className="list-card__content">
          <h2 className="list-card__heading">{productInformation?.title}</h2>
          <div className="flex items-center">
            <div>
              <p className="list-card__stars">
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
                <span>⭐</span>
              </p>
              <div className="list-card__pricing">
                <span class="offscreen">
                  £{productInformation?.current_price}
                </span>
                <span aria-hidden="true">
                  <span className="list-card__currency">£</span>
                  <span className="list-card__price">{price}</span>
                  <span className="list-card__fraction">{fraction}</span>
                  <s className="list-card__old-price">
                    £{productInformation?.rrp}
                  </s>
                </span>
              </div>
              <div className="prime-delivery">
                <img src={PrimeLogo} alt="prime" />
                <span className="text-secondary">FREE One-Day</span>
              </div>
              <p className="text-secondary size-base">
                Get it <span className="text-bold">Tomorrow, Mar 31</span>
              </p>
            </div>

            {/* <div className="flex">
              {productInformation?.details.map((item) => {
                return (
                  <div className="detail-item size-base">
                    <p>{item[1]}</p>
                    <p className="text-bold">
                      {item[0]} {item[1]}
                    </p>
                  </div>
                );
              })}
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Project;
