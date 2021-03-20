import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import subNavImage from "../../../images/sub-nav.jpg";
import "./subheader.css";

function Subheader() {
  return (
    <div className="subheader__container">
      <ul className="subheader_links">
        <li className="subheader__hamburger">
          <MenuIcon /> <span>All</span>
        </li>
        <li className="hide-mobile show-tablet">Best Sellers</li>
        <li className="hide-mobile  show-tablet">Prime Video</li>
        <li className="hide-mobile  show-tablet">Today's Deals</li>
        <li className="hide-mobile show-desktop">Prime</li>
        <li className="hide-mobile show-desktop">New Releases</li>
        <li className="hide-mobile show-desktop">Books</li>
        <li className="hide-mobile show-desktop">Gift Ideas</li>
        <li className="hide-mobile show-desktop">Electronics</li>
        <li className="hide-mobile show-desktop">Beauty</li>
        <li className="hide-mobile show-desktop">Gift Cards & Top Up</li>
        <li className="hide-mobile show-desktop">Home & Garden</li>
        <li className="hide-mobile show-desktop">Vouchers</li>
        <li className="hide-mobile show-desktop">Kindle Books</li>
      </ul>
      <div
        className="subheader__banner"
        style={{ backgroundImage: `url(${subNavImage})` }}
      ></div>
    </div>
  );
}

export default Subheader;
