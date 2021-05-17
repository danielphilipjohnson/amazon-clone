import React, { useState, useEffect } from "react";

import RecommendedProducts from "../shared/recommended-products";
import ProductList from "../shared/product-list";
import SubCards from "./sub-cards";

import getRecommendedProducts from "../../adapters/recommendedProductsAdapter";

import Bg from "../../images/bg.jpg";
import shippingImg from "../../images/shipping.jpg";
import popitemsImg from "../../images/popitems.jpg";
import topdealitemImg from "../../images/items/item1.jpg";

import "./home.css";
import "./card.css";

function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState(null);
  useEffect(() => {
    getRecommendedProducts().then((data) => {
      setRecommendedProducts(data);
    });
  }, []);
  return (
    <>
      <div className="home" id="home-top">
        <div className="home__container">
          <img className="home__image" src={Bg} alt="background" />
          <div className="card-grid">
            <div className="card">
              <h2 className="card__title">Free delivery on your first order</h2>
              <img className="card__image" src={shippingImg} alt="shipping" />
              <a className="card__link" href="/">
                Find out more
              </a>
            </div>
            <div className="card">
              <h2 className="card__title">Customers' most loved for him</h2>
              <img className="card__image" src={popitemsImg} alt="shipping" />
              <a className="card__link" href="/">
                See more
              </a>
            </div>
            <div className="card">
              <h2 className="card__title">Recently Viewed</h2>
              <img
                className="card__item__image"
                src={topdealitemImg}
                alt="shipping"
              />

              <a className="card__link" href="/">
                See your browsing history
              </a>
            </div>
            <div className="card">
              <h2 className="card__title">Free delivery on your first order</h2>
              <img className="card__image" src={shippingImg} alt="shipping" />
              <a className="card__link" href="/">
                Shop more deals
              </a>
            </div>
          </div>

          <RecommendedProducts
            cardTitle="Get yourself a little something"
            recommendedProducts={recommendedProducts}
          />

          <RecommendedProducts
            cardTitle="Recommended deals for you"
            recommendedProducts={recommendedProducts}
          />
          <SubCards />
          <RecommendedProducts
            cardTitle="Inspired by your shopping trends"
            recommendedProducts={recommendedProducts}
          />
        </div>
      </div>
      <ProductList title="Browsing History" />
    </>
  );
}

export default Home;
