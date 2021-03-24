import React from "react";
import "./checkout.css";
import { useHistory } from "react-router-dom";

import Cart from "./cart";
import SubTotal from "./subtotal";
import BrowsingHistory from "../sitewide/browsering-history";
import PeopleWhoBought from "../sitewide/people-who-bought";
import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  const CheckoutSubtotal = () => {
    if (user?.email && basket.length > 0) {
      return (
        <div>
          <div className="checkout__subtotal">
            <>
              <SubTotal />
              <small className="subtotal__gift">
                <input type="checkbox" />
                This order contains a gift
              </small>
              <button
                className="btn-amazon btn-amazon-active f-width"
                onClick={(e) => history.push("/payment")}
              >
                Proceed to Checkout
              </button>
            </>
          </div>
          <PeopleWhoBought />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="checkout">
        <div className="checkout__left">
          <img
            className="checkout__ad"
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423493668_.jpg"
          />

          <Cart />
        </div>
        <CheckoutSubtotal />
      </div>
      <BrowsingHistory />
    </>
  );
}

export default Checkout;
