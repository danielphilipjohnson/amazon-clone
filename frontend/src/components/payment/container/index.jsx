import React, { useState, useEffect } from "react";
import SubmitButton from "./button";
import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer/reducer";
import { Link, useHistory } from "react-router-dom";
import PrimeLogo from "../../../images/prime-logo.png";

import {
  CardElement,
  useStripe,
  useElements,
  paymentIntents,
} from "@stripe/react-stripe-js";

import CurrencyFormat from "react-currency-format";
import axios from "../../../axios";

import ProcessingImage from "../../../images/processing.svg";

function Index({ processing }) {
  const [
    { basket, user, isProcessing, isSuccessful },
    dispatch,
  ] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [disabled, setDisabled] = useState(true);

  const [error, setError] = useState(null);

  const [miniumPurchase, setMiniumPurchase] = useState(false);

  const [paymentIntent, setPaymentIntent] = useState(true);

  const history = useHistory();

  const checkoutProcessing = () => {
    dispatch({
      type: "CHECKOUT_PROCESSING",
    });
  };

  useEffect(() => {
    let totalCharge = Math.round(getBasketTotal(basket) * 100);

    if (totalCharge > 1) {
      setMiniumPurchase(true);
    } else {
      setMiniumPurchase(false);
    }

    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      let totalCharge = Math.round(getBasketTotal(basket) * 100);

      if (totalCharge > 1) {
        console.log(totalCharge);
        // Stripe expects the total in a currencies subunits
        await axios
          .post("http://localhost:1337/orders/payment", {
            basket,
          })
          .then(function (response) {
            setPaymentIntent(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("basket is empty");
      }
    };

    getClientSecret();
  }, [basket]);

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details

    // The card form is sanitised
    if (event.complete) {
      setDisabled(false);
      setError(false);
    }
    setError(event.error ? event.error.message : "");
  };

  /* need to check this works */
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    // Do not allow submit for the following conditions
    if (error || isProcessing || disabled) {
      return null;
    }

    // dont allow the user to resubmit card payment
    if (paymentIntent?.status === "isSuccessful" || isSuccessful) {
      setError(`Payment already succeeded`);
      setDisabled(true);

      // here use react portal to make an error dialog
      dispatch({
        type: "EMPTY_BASKET",
      });

      history.push("/orders");
    }

    // Allow submit
    if (paymentIntent.status !== "succeeded") {
      checkoutProcessing();

      const address = {
        shipping_address: "84 Raccoon Run",
        shipping_state: "Washington",
        shipping_country: "US",
        shipping_zip: "98106",
      };

      const payload = await stripe.confirmCardPayment(
        paymentIntent.client_secret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        }
      );
      console.log(payload.paymentIntent);

      const sendData = async (basket, paymentIntent, shippingAddress) => {
        console.log("im in send data");
        console.log("im in send data");
        console.log(payload);
        setPaymentIntent(paymentIntent);
        return await axios
          .post("http://localhost:1337/orders", {
            basket,
            paymentIntent,
            shippingAddress,
          })
          .then(function (response) {
            //check status of stripe
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      const response = await sendData(basket, payload.paymentIntent, address);

      // check response is good
      // sendData(basket, paymentIntent, shippingAddress);

      if (payload.error) {
        setError(`Payment failed ${payload.error.message}`);

        dispatch({
          type: "CHECKOUT_FINISH",
        });
      } else {
        setError(null);

        // NOW WE EMPTY THE CART AND GO TO ORDERS BABY
        // dispatch({
        //   type: "EMPTY_BASKET",
        // });

        dispatch({
          type: "CHECKOUT_FINISH",
        });

        dispatch({
          type: "CHECKOUT_COMPLETED",
        });

        // history.push("/orders");

        setPaymentIntent(payload.paymentIntent);
      }
    } else {
      return null;
    }
  };
  return (
    <>
      {isProcessing && (
        <div className="processing-card">
          <img src={ProcessingImage} />
        </div>
      )}
      <div className="payment__container">
        <div className="payment-card">
          {/* Payment section - delivery address  loading spinner*/}
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
                  {/* Payment section - Payment method */}
                  <div className="payment__section">
                    <div className="payment__title">
                      <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                      {/* Stripe magic will go */}
                      <form>
                        <CardElement onChange={handleChange} />

                        {/* Errors */}
                        {error && <div>{error}</div>}
                      </form>
                    </div>
                  </div>
                </li>
                <li className="payment__details-list">
                  {/* Payment section - Review Items */}
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
                succeeded={isSuccessful}
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
              Amazon Prime Delivery has been applied to the eligible items in
              your order.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
