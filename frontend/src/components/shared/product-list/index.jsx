import React, { useState, useEffect } from "react";

import getBrowsingHistory from "../../../adapters/browsingHistoryAdapter";

import Item from "./item";

import "./browsering-history.css";

function BrowseringHistory({ title }) {
  const [browseringHistoryProducts, setBrowseringHistoryProducts] = useState(
    null
  );

  useEffect(() => {
    getBrowsingHistory().then((data) => {
      setBrowseringHistoryProducts(data[0].products);
    });
  }, []);

  if (browseringHistoryProducts) {
    return (
      <div className="browsering__items__container">
        <div className="browsering__items__row">
          <h2 className="browsering__items-title">{title}</h2>

          <div className="browsering__items-cards">
            {browseringHistoryProducts.map((product) => {
              return <Item {...product} />;
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
