import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";

import { getBasketTotal } from "../../reducer/reducer";
import { useStateValue } from "../../StateProvider";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  return (
    <>
      {user && (
        <>
          <div className="subtotal">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({basket.length} items):{" "}
                    <strong>{` ${value}`}</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input type="checkbox" />
                    This order contains a gift
                  </small>
                </>
              )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>

          <button onClick={(e) => history.push("/payment")}>
            Proceed to Checkout
          </button>
        </>
      )}

      {user || (
        <>
          <h3>Your Amazon basket is empty </h3>
          <button onClick={(e) => console.log(e)}>
            Sign into your account
          </button>
        </>
      )}
    </>
  );
}

export default Subtotal;
