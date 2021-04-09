import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import getCategories from "../../../adapters/categoriesAdapter";
import formatImagePathFromBackend from "../../../utils/formatImagePathFromBackend";

import "./sub-cards.css";

function SubCard() {
  const [productTypes, setProducts] = useState([]);
  useEffect(() => {
    getCategories().then((data) => {
      setProducts(data);
    });
  }, []);
  if (productTypes) {
    return (
      <div className="sub__cards-container">
        {productTypes.map((productType) => {
          return (
            <div
              className="sub__cards-grid"
              key={productType.title}
              key={productType.id}
            >
              <h2 className="sub__cards-title">{productType.title}</h2>
              <div className="sub__cards-items">
                {productType.sub_card_imgs.map((item) => {
                  return (
                    <div className="sub__card" key={item.id}>
                      <Link to={`search?category=${item.category}`}>
                        <img
                          src={formatImagePathFromBackend(item.image.url)}
                          className="sub__card-img"
                          alt="sub__card"
                        />
                      </Link>
                      <p className="sub__card-title">{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default SubCard;
