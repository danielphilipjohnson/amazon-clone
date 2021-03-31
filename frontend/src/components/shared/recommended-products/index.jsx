import React from "react";
import "./recommended-products.css";

import item1 from "../../../images/items/item1.jpg";
import item2 from "../../../images/items/item2.jpg";
import item3 from "../../../images/items/item3.jpg";
import item4 from "../../../images/items/item4.jpg";
import item5 from "../../../images/items/item5.jpg";
import item6 from "../../../images/items/item6.jpg";
import item7 from "../../../images/items/item7.jpg";

// random generate which products
function RecommendedProducts({ title }) {
  return (
    <div className="recommended__items__container">
      <div className="recommended__items__row">
        <h2 className="recommended__items-title">{title}</h2>

        <div className="recommended__items-cards">
          <img
            className="recommended__items-product"
            src={item1}
            alt="product description"
          />

          <img
            className="recommended__items-product"
            src={item2}
            alt="product description"
          />
          <img
            className="recommended__items-product"
            src={item3}
            alt="product description"
          />
          <img
            className="recommended__items-product"
            src={item4}
            alt="product description"
          />
          <img
            className="recommended__items-product"
            src={item5}
            alt="product description"
          />
          <img
            className="recommended__items-product"
            src={item6}
            alt="product description"
          />
        </div>
      </div>
    </div>
  );
}

export default RecommendedProducts;
