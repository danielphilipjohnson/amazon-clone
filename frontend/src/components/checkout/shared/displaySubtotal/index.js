import React from "react";
import CurrencyFormat from "react-currency-format";
import "./subtotal.css";

import { getBasketTotal, getBasketLength } from "../../../../reducer/reducer";
import { useStateValue } from "../../../../StateProvider";

function Subtotal() {
  const [{ basket }] = useStateValue();

  if (basket.length > 0) {
    return (
      <>
        <div className="subtotal">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({getBasketLength(basket)} items):{" "}
                  <strong>{` ${value}`}</strong>
                </p>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <h3>Cart broken</h3>
      </>
    );
  }
}

export default Subtotal;
