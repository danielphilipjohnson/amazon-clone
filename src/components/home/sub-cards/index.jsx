import React, { useState, useEffect } from "react";

import "./sub-cards.css";

const data = [
  {
    title: "Garden & Outdoors",
    products: [
      { image: "/images/sub-items/sub-item1.jpg", title: "Outdoor Lighting" },
      { image: "/images/sub-items/sub-item2.jpg", title: "Sheds & Storage" },
      {
        image: "/images/sub-items/sub-item3.jpg",
        title: "Garden Furniture & Accessories",
      },
      { image: "/images/sub-items/sub-item4.jpg", title: "Gardening" },
    ],
  },
  {
    title: "Garden & Outdoors",
    products: [
      { image: "/images/sub-items/sub-item1.jpg", title: "Outdoor Lighting" },
      { image: "/images/sub-items/sub-item2.jpg", title: "Sheds & Storage" },
      {
        image: "/images/sub-items/sub-item3.jpg",
        title: "Garden Furniture & Accessories",
      },
      { image: "/images/sub-items/sub-item4.jpg", title: "Gardening" },
    ],
  },
  {
    title: "Garden & Outdoors",
    products: [
      { image: "/images/sub-items/sub-item1.jpg", title: "Outdoor Lighting" },
      { image: "/images/sub-items/sub-item2.jpg", title: "Sheds & Storage" },
      {
        image: "/images/sub-items/sub-item3.jpg",
        title: "Garden Furniture & Accessories",
      },
      { image: "/images/sub-items/sub-item4.jpg", title: "Gardening" },
    ],
  },
  {
    title: "Garden & Outdoors",
    products: [
      { image: "/images/sub-items/sub-item1.jpg", title: "Outdoor Lighting" },
      { image: "/images/sub-items/sub-item2.jpg", title: "Sheds & Storage" },
      {
        image: "/images/sub-items/sub-item3.jpg",
        title: "Garden Furniture & Accessories",
      },
      { image: "/images/sub-items/sub-item4.jpg", title: "Gardening" },
    ],
  },
];

function SubCard() {
  const [productTypes, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div className="sub__cards-container">
      {productTypes.map((productType) => {
        return (
          <div className="sub__cards-grid">
            <h2 className="sub__cards-title">{productType.title}</h2>
            <div className="sub__cards-items">
              {productType.products.map((project) => {
                return (
                  <div className="sub__card">
                    <img
                      className="sub__card-img"
                      src={process.env.PUBLIC_URL + project.image}
                      alt="sub__card"
                    />
                    <p className="sub__card-title">{project.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default SubCard;
