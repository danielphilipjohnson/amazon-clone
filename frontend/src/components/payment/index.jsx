import React, { useState, useEffect } from "react";
import PaymentContainer from "./container";
import Header from "./header";
import SubmitButton from "./container/button";
import "./payment.css";
import AmazonLogo from "../../images/amazon-logo-black.png";
import { useStateValue } from "../../StateProvider";
import PrimeLogo from "../../images/prime-logo.png";

// import CheckoutProduct from "../../shared/product/index";
import { Link, useHistory } from "react-router-dom";
import {
  CardElement,
  useStripe,
  useElements,
  paymentIntents,
} from "@stripe/react-stripe-js";

import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer/reducer";
import ProcessingImage from "../../images/processing.svg";
import axios from "../../axios";
import { db } from "../../adapters/firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [disabled, setDisabled] = useState(true);

  const [error, setError] = useState(null);

  const [miniumPurchase, setMiniumPurchase] = useState(false);

  const [paymentIntent, setPaymentIntent] = useState(true);

  return (
    // basketLength
    <div className="payment">
      <Header basketLength={basket?.length} />
      <PaymentContainer
        processing={processing}

        // handleChange={handleChange}
      />

      {/* <div className="payment__container">
        <div className="payment-card">
          <div>
            <div className="payment__section">
              <ol className="payment__details">
                <li className="payment__details-list">
                  <div className="payment__section">
                    <div className="payment__title">
                      <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                      <p>{user?.email}</p>
                      <p>123 React Lane</p>
                      <p>Los Angeles, CA</p>
                    </div>
                  </div>
                </li>
                <li className="payment__details-list">
                  <div className="payment__section">
                    <div className="payment__title">
                      <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                      <form>
                        <CardElement onChange={handleChange} />

                        {error && <div>{error}</div>}
                      </form>
                    </div>
                  </div>
                </li>
                <li className="payment__details-list">
                  <div className="payment__section">
                    <div className="payment__title">
                      <h3>Review items and delivery</h3>
                    </div>
                  </div>
                  <div className="payment__items">
                    <h2 className="color-success">
                      Guaranteed delivery: 28 Mar. 2021
                    </h2>{" "}
                    <span>
                      If you order in the next 6 hours and 9 minutes. Details
                    </span>
                    {basket.map((item) => (
                      <div className="reviewProduct" key={item.id}>
                        <img
                          className="reviewProduct__image"
                          src={item.image}
                        />
                        <div className="reviewProduct__info">
                          <p className="reviewProduct__title">{item.title}</p>
                          <div className="reviewProduct__price">
                            <p className="color-total">
                              <small>$</small>
                              {item.price}{" "}
                            </p>
                            <img src={PrimeLogo} alt="" />
                          </div>
                          <span className="color-mute">
                            Sold by:Amazon EU S.a.r.L.
                          </span>
                        </div>

                        <div>
                          <p className="repaymentIntentviewForm__heading">
                            Choose your Prime delivery option:
                          </p>
                          <form action="">
                            <div className="form-group">
                              <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                              />
                              <label for="male" className="form__delivery">
                                FREE One-Day Delivery :{" "}
                                <span className="color-success">
                                  get it Tomorrow, Mar. 26
                                </span>
                              </label>
                            </div>

                            <br />
                            <div className="form-group">
                              <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="male"
                              />
                              <label for="male" className="form__delivery">
                                FREE Amazon Day Delivery :
                                <span className="color-success">
                                  get it Sunday, Mar. 28
                                </span>
                              </label>
                            </div>
                          </form>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              </ol>
            </div>
            <div className="buynow__bottom">
              <SubmitButton
                processing={processing}
                disabled={disabled}
                succeeded={succeeded}
                handleSubmit={handleSubmit}
                className="btn-amazon btn-amazon-active buynow__btn"
              />

              <div className="content">
                <h3 className="color-total">
                  Order Total:{" "}
                  <CurrencyFormat
                    renderText={(value) => <span> {value}</span>}
                    decimalScale={2}
                    value={getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </h3>
 disabled={disabled}
        succeeded={succeeded}
        handleSubmit={handleSubmit}
                <p>
                  By placing your order you agree to Amazon's Conditions of Use
                  & Sale. Please see our Privacy Notice, our Cookies Notice and
                  our Interest-Based Ads Notice.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="payment__aside">
          <div className="payment__aside__body">
            <SubmitButton
              processing={processing}
              disabled={disabled}
              succeeded={succeeded}
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
              Amazon Prime Delivery has been applied to the eligible items in
              your order.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Payment;
