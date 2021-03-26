import React from "react";

function Product({ id }) {
  return (
    <div className="product-container">
      <img src="https://source.unsplash.com/random" alt="" />
      <div className="product-desc">
        <h2>
          Funko 39048 POP Vinyl: Games: Fortnite: Loot Lama Collectible Figure,
          Multicolour{" "}
        </h2>
      </div>
      <div className="product-form">
        <h3 className="color-total">$13.99 {id}</h3>
      </div>
    </div>
  );
}

export default Product;
