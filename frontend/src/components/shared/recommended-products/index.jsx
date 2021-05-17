import React from "react";
import "./recommended-products.css";
import formatImagePathFromBackend from "../../../utils/formatImagePathFromBackend";
import { Link } from "react-router-dom";

// random generate which products
function RecommendedProducts({ cardTitle, recommendedProducts }) {
  if (recommendedProducts) {
    return (
      <div className="recommended__items__container">
        <div className="recommended__items__row">
          <h2 className="recommended__items-title">{cardTitle}</h2>

          <div className="recommended__items-cards">
            {recommendedProducts.map((item) => {
              return (
                <Link to={`product/${item.id}`} key={item.id}>
                  <img
                    className="recommended__items-product"
                    src={formatImagePathFromBackend(item.image.url)}
                    alt={item.title}
                    key={item.key}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return <div className="recommended__items__container">Loading</div>;
}

export default RecommendedProducts;
