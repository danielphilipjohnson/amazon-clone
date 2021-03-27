import React, { useState, useEffect } from "react";
import Description from "./description";
import Form from "./form";
import "./item.css";

const data = () => {
  return {
    img: "https://source.unsplash.com/random",
    title: `Funko 39048 POP Vinyl: Games: Fortnite: Loot Lama Collectible Figure,
    Multicolour`,
    rrp: 29.19,
    current_price: 13.99,
    rating: 4,
    details: [
      ["Brand", "Funko"],
      ["Material", "Vinyl"],
      ["Size", "6.4 x 6.4 x 9.5 centimetres"],
      ["Item weight", "0.3 Pounds"],
    ],
    description__about: [
      "From Dragon Ball Z, Vegetal, as a stylized POP vinyl from Funko",
      ` Stylized collectable stands 3 ¾ inches tall, perfect for any
    Dragon Ball Z fan`,
      "Collect and display all Dragon Ball Z POP Vinyl's",
      `Funko POP is the 2018 Toy of the Year and People's Choice award
    winner`,
    ],
    stock: 14,
  };
};

function Item({ id }) {
  const [product, setProduct] = useState(null);

  const fetchProduct = (id) => {
    console.log(id);
    setProduct(data);
  };
  useEffect(() => {
    fetchProduct(id);
  }, []);

  if (product) {
    return (
      <div className="product-container">
        <img src={product.img} alt="" className="product__fullimage" />
        <Description product={product} />
        <Form price={product.current_price} stock={product.stock} />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
}

export default Item;
