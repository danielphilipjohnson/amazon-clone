import React, { useState, useEffect } from "react";

import { getBrowsingHistory } from "../../../adapters/homeAdapter";

import Item from "./item";

import "./browsering-history.css";

function BrowseringHistory({ title }) {
  const [browseringHistoryProducts, setBrowseringHistoryProducts] = useState(
    null
  );

  useEffect(() => {
    setBrowseringHistoryProducts(getBrowsingHistory());
  }, []);

  if (browseringHistoryProducts) {
    return (
      <div className="browsering__items__container">
        <div className="browsering__items__row">
          <h2 className="browsering__items-title">{title}</h2>

          <div className="browsering__items-cards">
            {browseringHistoryProducts.map((product) => {
              return (
                <Item
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  description={product.description}
                  rating={product.rating}
                  like={product.likes}
                  price={product.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading ....</div>;
  }
}

export default BrowseringHistory;
