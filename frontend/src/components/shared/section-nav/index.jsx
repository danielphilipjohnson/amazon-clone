import React from "react";
import "./checkoutSubNav.css";
function CheckoutSubNav() {
  return (
    <div className="checkoutSubNav">
      <ul className="checkoutSubNav__items">
        <li>Amazon.co.uk</li>
        <li>Today's Deals</li>
        <li className="hide-mobile show-tablet">Warehouse Deals</li>
        <li className="hide-mobile show-tablet">Outlet</li>
        <li className="hide-mobile show-tablet">Subscribe & Save</li>
        <li className="hide-mobile show-tablet">Vouchers</li>
        <li className="hide-mobile show-desktop">Amazon Family</li>
        <li className="hide-mobile show-desktop">Amazon Prime</li>
        <li className="hide-mobile show-desktop">Prime Video</li>
        <li className="hide-mobile show-desktop">Prime Student</li>
        <li className="hide-mobile show-desktop">Mobile Apps</li>
        <li className="hide-mobile show-desktop">Amazon Pickup Locations</li>
        <li className="hide-mobile show-desktop">Amazon Assistant</li>
      </ul>
    </div>
  );
}

export default CheckoutSubNav;
