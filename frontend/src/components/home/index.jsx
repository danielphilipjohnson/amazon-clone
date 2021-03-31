import React from "react";

import RecommendedProducts from "../shared/recommended-products";
import ProductList from "../shared/product-list";
import SubCards from "./sub-cards";

import Bg from "../../images/bg.jpg";
import shippingImg from "../../images/shipping.jpg";
import popitemsImg from "../../images/popitems.jpg";
import topdealitemImg from "../../images/topdealitem.jpg";

import "./home.css";
import "./card.css";

function Home() {
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
              <h2 className="card__title">Top Deal</h2>
              <img
                className="card__item__image"
                src={topdealitemImg}
                alt="shipping"
                style={{ height: "240px", width: "125px" }}
              />
              <p className="card__description">
                £4.79- £17.99 Command Hanging Strips and Bathroom Products
              </p>
              <a className="card__link" href="/">
                Shop more deals
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

          <RecommendedProducts title="Get yourself a little something" />
          <RecommendedProducts title="Recommended deals for you" />
          <SubCards />
          <RecommendedProducts title="Inspired by your shopping trends" />
        </div>
      </div>
      <ProductList title="Browsing History" />
    </>
  );
}

export default Home;
