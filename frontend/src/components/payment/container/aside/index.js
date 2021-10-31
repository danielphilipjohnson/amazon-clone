import React from "react";
import SubmitButton from "../button";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../../../reducer/reducer";
import { useStateValue } from "../../../../StateProvider";

function Index({ disabled, handleSubmit }) {
  const [{ basket, isProcessing, isSuccessful }] = useStateValue();
  return (
    <div className="payment__aside">
      <div className="payment__aside__body">
        <SubmitButton
          processing={isProcessing}
          disabled={disabled}
          succeeded={isSuccessful}
          handleSubmit={handleSubmit}
          className="btn-amazon btn-amazon-active f-width buynow__btn"
        />
        <p className="payment__notice border-bottom">
          <span>By placing your order you agree to Amazon's </span>
          <a href="/" className="alink-normal">
            Conditions of Use & Sale.
          </a>
          <span> Please see our</span>
          <a href="/" className="alink-normal">
            Privacy Notice
          </a>
          <span> , our</span>
          <a href="/" className="alink-normal">
            Cookies Notice
          </a>
          <span> and our </span>
          <a href="/" className="alink-normal">
            Interest-Based Ads Notice
          </a>
          <span> . </span>
        </p>

        <h3 className="payment__heading">Order Summary</h3>

        <ul className="payment__aside-list border-bottom">
          <li>
            <span>Items:</span>{" "}
            <span>
              <CurrencyFormat
                renderText={(value) => <h3> {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </li>
          <li>
            <span>Postage & Packing:</span> <span>£0.00</span>
          </li>
        </ul>
        <h3 className="payment__heading color-total">
          <span>Order Total:</span>
          <CurrencyFormat
            renderText={(value) => <span> {value}</span>}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </h3>
        <p>
          Order totals include VAT.
          <a href="/" className="alink-normal d-inline">
            See details.
          </a>
        </p>
      </div>

      <div className="payment_aside-bottom">
        <p>
          Amazon Prime Delivery has been applied to the eligible items in your
          order.
        </p>
      </div>
    </div>
  );
}

export default Index;
