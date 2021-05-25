import React, { useState } from "react";
import "./header.css";

import { Link, useHistory } from "react-router-dom";

import RoomIcon from "@material-ui/icons/Room";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../../../StateProvider";

import useUser from "../../../hooks/useUser";
import { auth } from "../../../adapters/firebase";

import AmazonLogo from "../../../images/amazon-logo.png";

function Header() {
  let history = useHistory();
  const [{ user, token, status, error }, userDispatch] = useUser();

  function isAuthenticated() {
    if (token) {
      return true;
    }
  }

  const [{ basket }] = useStateValue();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    if (token) {
      userDispatch({ type: "remove token" });
      auth.signOut();
    }
  };

  const onSearchClick = (e) => {
    const formSearch = `/search?category=${searchQuery}`;
    history.push(formSearch);
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="header">
      <div className="nav-left">
        <Link to={"/"} className="header__link">
          <img
            className="header__logo"
            src={AmazonLogo}
            alt="fake amazon clone logo"
          />
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
            onChange={handleChange}
          >
            <option defaultValue="all">All Departments</option>
            <option value="accessories">Accessories</option>
            <option value="baby">Baby</option>
            <option value="books">Books</option>
            <option value="children">Children</option>
            <option value="clothes">Clothes</option>
            <option value="computers">Computers & Accessories</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="films">Films</option>
            <option value="garden">Garden</option>
            <option value="home">Home</option>
            <option value="jewellery">Jewellery</option>
            <option value="music">Music</option>
            <option value="pets">Pets</option>
            <option value="toys">Toys </option>
            <option value="shoes">Shoes</option>
          </select>
        </div>
        <input className="header__searchInput" type="text" />
        <SearchIcon
          className="header__searchIcon"
          onClick={() => onSearchClick()}
        />
      </div>

      <div className="nav-right header__nav">
        <div className="header__option hide-mobile show-desktop">
          <span className="flag-icon flag-icon-gb"></span>
        </div>
        {isAuthenticated() && (
          <button onClick={handleLogout} className="header__option no-button">
            <span className="header__optionLineOne">Hello {user.email}</span>
            <span className="header__optionLineTwo">{"Sign Out"}</span>
          </button>
        )}
        {!isAuthenticated() && (
          <Link to={"/login"}>
            <div className="header__option">
              <span className="header__optionLineOne">Hello {"Sign in"}</span>
              <span className="header__optionLineTwo">{"Sign In"}</span>
            </div>
          </Link>
        )}
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
