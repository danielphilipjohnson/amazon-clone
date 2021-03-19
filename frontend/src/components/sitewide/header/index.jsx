import React from "react";
import "./header.css";

import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../../StateProvider";

import { auth } from "../../../adapters/firebase";

import AmazonLogo from "../../../images/amazon-logo.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <div className="nav-left">
        <Link to="/" className="header__link">
          <img className="header__logo" src={AmazonLogo} />
          <span>.co.uk</span>
        </Link>

        <div className="header__search__address hide-mobile show-desktop">
          <RoomIcon />
          <div>
            <p>Hello</p>
            <p>Select your address</p>
          </div>
        </div>
      </div>

      <div className="nav-mid header__search">
        <div className="select-box">
          <select
            aria-describedby="search Dropdown"
            className="header__search-dropdown hide-mobile show-desktop"
          >
            <option defaultValue="amazon-devices">Amazon Devices</option>
            <option value="all">All Departments</option>
            <option value="alexa-skills">Alexa Skills</option>
            <option value="amazon-global-store">Amazon Global Store</option>
            <option value="warehouse-deals">Amazon Warehouse</option>
            <option value="mobile-apps">Apps &amp; Games</option>
            <option value="audible">Audible Audiobooks</option>
            <option value="baby">Baby</option>
            <option value="beauty">Beauty</option>
            <option value="stripbooks">Books</option>
            <option value="automotive">Car &amp; Motorbike</option>
            <option value="popular">CDs &amp; Vinyl</option>
            <option value="classical">Classical Music</option>
            <option value="clothing">Clothing</option>
            <option value="computers">Computers &amp; Accessories</option>
            <option value="digital-music">Digital Music </option>
            <option value="diy">DIY &amp; Tools</option>
            <option value="dvd">DVD &amp; Blu-ray</option>
            <option value="electronics">Electronics &amp; Photo</option>
            <option value="fashion">Fashion</option>
            <option value="outdoor">Garden &amp; Outdoors</option>
            <option value="gift-cards">Gift Cards</option>
            <option value="grocery">Grocery</option>
            <option value="handmade">Handmade</option>
            <option value="drugstore">Health &amp; Personal Care</option>
            <option value="local-services">Home &amp; Business Services</option>
            <option value="kitchen">Home &amp; Kitchen</option>
            <option value="industrial">Industrial &amp; Scientific</option>
            <option value="jewelry">Jewellery</option>
            <option value="digital-text">Kindle Store</option>
            <option value="appliances">Large Appliances</option>
            <option value="lighting">Lighting</option>
            <option value="luggage">Luggage</option>
            <option value="mi">Musical Instruments &amp; DJ Equipment</option>
            <option value="videogames">PC &amp; Video Games</option>
            <option value="pets">Pet Supplies</option>
            <option value="luxury-beauty">Premium Beauty</option>
            <option value="instant-video">Prime Video</option>
            <option value="shoes">Shoes &amp; Bags</option>
            <option value="software">Software</option>
            <option value="sports">Sports &amp; Outdoors</option>
            <option value="office-products">
              Stationery &amp; Office Supplies
            </option>
            <option value="toys">Toys &amp; Games</option>
            <option value="watches">Watches</option>
          </select>
        </div>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="nav-right header__nav">
        <div className="header__option hide-mobile show-desktop">
          <span className="flag-icon flag-icon-gb"></span>
        </div>
        <Link to={!user && "/login"}>
          <div className="header__option">
            <span
              onClick={handleAuthenticaton}
              className="header__optionLineOne"
            >
              Hello {user ? user.email : "Sign in"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
