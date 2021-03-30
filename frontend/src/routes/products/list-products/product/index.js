import React from "react";
import PrimeLogo from "../../../../images/prime-logo.png";

import baseUrl from "../../../../adapters";

function Project({ productInformation }) {
  const DisplayPrice = () => {
    const productInformationStr = productInformation.current_price
      .toString()
      .split(".");
    return {
      price: productInformationStr[0],
      fraction: productInformationStr[1],
    };
  };
  const { price, fraction } = DisplayPrice();

  return (
    <div className="list-card__product">
      <img
        className="list-card__image"
        src={baseUrl + productInformation?.image.url}
        alt=""
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
          <div className="flex">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
