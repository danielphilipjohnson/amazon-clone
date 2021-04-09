import React from "react";
import PropTypes from "prop-types";
import generateStars from "./utils";
import formatImagePathFromBackend from "../../../../utils/formatImagePathFromBackend";

import PrimeLogo from "../../../../images/prime-logo.png";
import "./index.css";

function Item({ id, title, image, rating, price, likes }) {
  return (
    <div className="browsering__items-product" key={id}>
      <img
        className="browsering__items-image"
        src={formatImagePathFromBackend(image.url)}
        alt="product description"
      />
      <div className="browsering__items-description-text">
        <p>{title}</p>
        <p>
          <span className="rating">{generateStars(rating)}</span>{" "}
          <span>{likes}</span>
        </p>
        <div className="prime__delivery">
          <img
            className="product-description__primelogo-item"
            src={PrimeLogo}
          />
          <span>FREE One-Day</span>
        </div>

        <p className="price">{price}</p>
      </div>
    </div>
  );
}
Item.propTypes = {
  id: PropTypes.number,
  image: PropTypes.object,
  description: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  likes: PropTypes.number,
};
export default Item;
