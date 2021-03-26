import React from "react";

import Bg from "../../images/bg.jpg";
// spilt out later
import Product from "../oldproduct";
import shippingImg from "../../images/shipping.jpg";
import popitemsImg from "../../images/popitems.jpg";
import topdealitemImg from "../../images/topdealitem.jpg";

import RecommendedProducts from "./recommended-products";

import SubCards from "./sub-cards";
import "./home.css";
import "./card.css";

function Home() {
  return (
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
            <a className="c./src/index.jsard__link" href="/">
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
          <Product
            id="1"
            axios
            title="The lean startup"
            price={29.99}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSB1dS4HWYeftUtMYTKlSJhxKK_dtk-J7kJVljnW-zl01X62b7cuyZGn-11S7YHKIYr203-ZriO&usqp=CAc"
            rating={5}
          />

          <Product
            id="2"
            title="Norton 360 Deluxe 2020, Antivirus software for 5 Devices and 1-year subscription with automatic renewal, Includes Secure VPN and Password Manager, PC/Mac/iOS/Android, Activation Code by Post"
            price={17.95}
            image={process.env.PUBLIC_URL + "/images/norton.jpg"}
            rating={5}
          />
        </div>
        <div className="home__row">
          {/* <Product
            id="3"
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
            price={49.99}
            image={process.env.PUBLIC_URL + "/images/echodot.jpg"}
            rating={5}
          />firebase
          <Product
            id="4"
            title="Shark HZ400UKT, Vacuum Cleaner, Blue & Grey"
            price={199.99}
            image={process.env.PUBLIC_URL + "/images/sharkhover.jpg"}
            rating={5}
          />
          <Product
            id="5"
            title="
            LEGO 10698 Classic Large Creative Brick Box Construction Set, Toy Storage, Fun Colourful Toy Bricks for Lego Masters"
            price={39.99}
            image={process.env.PUBLIC_URL + "/images/lego.jpg"}
            rating={5}
          /> */}
        </div>
        <div className="home__row">
          {/* <Product
            id="6"
            title="Mastering React Test-Driven Development: Build rock-solid, well-tested web apps with React, Redux and GraphQL Paperback – 3 May 2019"
            price={30.99}
            image={process.env.PUBLIC_URL + "/images/reactbook.jpg"}
            rating={5}
          /> */}
        </div>
        <RecommendedProducts />
        <SubCards />
        <RecommendedProducts />
      </div>
    </div>
  );
}

export default Home;
