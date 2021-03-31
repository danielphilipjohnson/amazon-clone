import React, { useState, useEffect } from "react";

import categoryData from "../../../adapters/categoriesAdapter";
import ProductImage from "../../shared/product-image";

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
    console.log(categoryData);
    setProducts(categoryData);
  }, []);

  return (
    <div className="sub__cards-container">
      {productTypes.map((productType) => {
        return (
          <div className="sub__cards-grid" key={productType.Title}>
            <h2 className="sub__cards-title">{productType.Title}</h2>
            <div className="sub__cards-items">
              {productType.category_items.map((item) => {
                return (
                  <div
                    className="sub__card"
                    key={
                      productType.Title +
                      productType.updated_at +
                      productType.id
                    }
                  >
                    <ProductImage
                      url={item.Image.url}
                      classname="sub__card-img"
                      alt="sub__card"
                    />
                    <p className="sub__card-title">{item.Title}</p>
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
