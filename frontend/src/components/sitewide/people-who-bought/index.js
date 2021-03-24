import React from "react";

import item1 from "../../../images/items/item1.jpg";
import item2 from "../../../images/items/item2.jpg";
import item3 from "../../../images/items/item3.jpg";
import item4 from "../../../images/items/item4.jpg";
import item5 from "../../../images/items/item5.jpg";
import item6 from "../../../images/items/item6.jpg";

import "./people-who-bought.css";

function PeopleWhoBought() {
  return (
    <div className="suggested__items__container">
      <div className="suggested__items__row">
        <h2 className="suggested__items-title">
          Customers Who Bought The Ultimate Great British Afternoon Tea &
          Scon... Also Bought
        </h2>

        <div className="suggested__items-cards">
          <div className="suggested__items-card">
            <img
              className="suggested__items-product"
              src={item1}
              alt="product description"
            />
            <div className="suggested__items-description">
              <h3 className="alink-normal">Item Name</h3>
              <span>🌟 🌟 🌟 🌟 🌟</span>
              <p className="color-total">$30.00</p>
              <button className="btn-amazon btn-amazon-active">
                Add to basket
              </button>
            </div>
          </div>
          <div className="suggested__items-card">
            <img
              className="suggested__items-product"
              src={item2}
              alt="product description"
            />
            <div className="suggested__items-description">
              <h3 className="alink-normal">Item Name</h3>
              <span>🌟 🌟 🌟 🌟 🌟</span>
              <p className="color-total">$30.00</p>
              <button className="btn-amazon btn-amazon-active">
                Add to basket
              </button>
            </div>
          </div>
          <div className="suggested__items-card">
            <img
              className="suggested__items-product"
              src={item3}
              alt="product description"
            />
            <div className="suggested__items-description">
              <h3 className="alink-normal">Item Name</h3>
              <span>🌟 🌟 🌟 🌟 🌟</span>
              <p className="color-total">$30.00</p>
              <button className="btn-amazon btn-amazon-active">
                Add to basket
              </button>
            </div>
          </div>
          <div className="suggested__items-card">
            <img
              className="suggested__items-product"
              src={item4}
              alt="product description"
            />
            <div className="suggested__items-description">
              <h3 className="alink-normal">Item Name</h3>
              <span>🌟 🌟 🌟 🌟 🌟</span>
              <p className="color-total">$30.00</p>
              <button className="btn-amazon btn-amazon-active">
                Add to basket
              </button>
            </div>
          </div>
          <div className="suggested__items-card">
            <img
              className="suggested__items-product"
              src={item5}
              alt="product description"
            />
            <div className="suggested__items-description">
              <h3 className="alink-normal">Item Name</h3>
              <span>🌟 🌟 🌟 🌟 🌟</span>
              <p className="color-total">$30.00</p>
              <button className="btn-amazon btn-amazon-active">
                Add to basket
              </button>
            </div>
          </div>
          <div className="suggested__items-card">
            <img
              className="suggested__items-product"
              src={item6}
              alt="product description"
            />
            <div className="suggested__items-description">
              <h3 className="alink-normal">Item Name</h3>
              <span>🌟 🌟 🌟 🌟 🌟</span>
              <p className="color-total">$30.00</p>
              <button className="btn-amazon btn-amazon-active">
                Add to basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PeopleWhoBought;
