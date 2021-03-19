import React from "react";
import PropTypes from "prop-types";
import generateStars from "./utils";

function Item({ id, image, description, rating, price, likes }) {
  return (
    <div className="browsering__items-product">
      <img src={image} alt="product description" />
      <div className="browsering__items-description-text">
        <p>{description}</p>
        <p>
          <span className="rating">{generateStars(rating)}</span>{" "}
          <span>{likes}</span>
        </p>
        <p className="price">{price}</p>
      </div>
    </div>
  );
}
Item.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  description: PropTypes.string,
  rating: PropTypes.number,
  price: PropTypes.number,
  likes: PropTypes.number,
};
export default Item;
