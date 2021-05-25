import React from "react";
import { useHistory } from "react-router-dom";
import SubTotal from "../shared/displaySubtotal";
import PeopleWhoBought from "../../sitewide/people-who-bought";
import IsAuthenticated from "../../../utils/isAuthenticated";

function CheckoutSubtotal({ basket }) {
  const history = useHistory();

  if (IsAuthenticated() && basket.length > 0) {
    return (
      <>
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
      </>
    );
  } else {
    return null;
  }
}

export default CheckoutSubtotal;
