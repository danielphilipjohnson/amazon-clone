import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";

import Aside from "./aside";
import SubmitButton from "./button";
import QuantitySelector from "../../shared/quantitySelector";

import axios from "../../../axios";

import { useStateValue } from "../../../StateProvider";
import { getBasketTotal } from "../../../reducer/reducer";

import PrimeLogo from "../../../images/prime-logo.png";

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

  const noPaymentIntent = (dispatch, message) => {
    dispatch({
      type: "OPEN_ALERT",
      payload: {
        type: "Warning",
        message: message,
        isOpen: true,
      },
    });
  };

  const paymentIntentAlreadySubmittied = (dispatch) => {
    dispatch({
      type: "OPEN_ALERT",
      payload: {
        type: "Warning",
        message: "Error Payment already succeeded.",
        isOpen: true,
      },
    });

    // setError(`Payment already succeeded`);
    // setDisabled(true);

    dispatch({
      type: "EMPTY_BASKET",
    });

    history.push("/orders");
  };

  const formContainsErrors = (dispatch) => {
    dispatch({
      type: "OPEN_ALERT",
      payload: {
        type: "Warning",
        message: `Error while processing please try again later. ${error}`,
        isOpen: true,
      },
    });
    return null;
  };

  const dependenciesFailedToLoad = (dispatch) => {
    dispatch({
      type: "OPEN_ALERT",
      payload: {
        type: "Warning",
        message: "Error was unable to process payment.",
        isOpen: true,
      },
    });

    return null;
  };

  const confirmCardPayment = async (client_secret, CardElement, address) => {
    try {
      return await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            email: user?.email,
            name: "Anon",
            phone: "+15555555555",
            address: {
              city: address.shipping_state,
              country: address.shipping_country,
              line1: address.shipping_address,
              line2: null,
              postal_code: address.shipping_zip_postal_code,
              state: address.shipping_state,
            },
          },
        },
      });
    } catch (error) {
      return error;
    }
  };

  // add on complete function
  const sendOrderToBackend = async (basket, payload, shippingAddress) => {
    setPaymentIntent(payload.paymentIntent);
    // check if payload payment intent exists

    if (payload.paymentIntent) {
      return await axios
        .post("http://localhost:1337/orders", {
          basket,
          paymentIntent: payload.paymentIntent,
          shippingAddress,
        })
        .then(function (response) {
          // check if backend was successful saving the order
          if (response.status === 200) {
            dispatch({
              type: "OPEN_ALERT",
              payload: {
                type: "Success",
                message: "Your order has been received.",
                isOpen: true,
              },
            });

            dispatch({
              type: "CHECKOUT_FINISH",
            });

            dispatch({
              type: "CHECKOUT_COMPLETED",
            });

            setPaymentIntent(payload.paymentIntent);

            dispatch({
              type: "EMPTY_BASKET",
            });

            history.push("/orders");
          }
        })
        .catch(function (error) {
          dispatch({
            type: "OPEN_ALERT",
            payload: {
              type: "Warning",
              message: "Error Payment failed please try again later.",
              isOpen: true,
            },
          });
          setError(`Payment failed ${error.message}`);

          dispatch({
            type: "CHECKOUT_FINISH",
          });
        });
    } else {
      // throw
      throw new Error("No payment intent");
    }
  };

  useEffect(() => {
    let totalCharge = Math.round(getBasketTotal(basket) * 100);

    // need to implement this logic
    if (totalCharge > 1) {
      setMiniumPurchase(true);
    } else {
      setMiniumPurchase(false);
    }

    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      let totalCharge = Math.round(getBasketTotal(basket) * 100);

      if (totalCharge > 1) {
        await axios
          .post("http://localhost:1337/orders/payment", {
            basket,
          })
          .then(function (response) {
            setPaymentIntent(response.data);
          })
          .catch(function (error) {
            console.log(error);
            setPaymentIntent(null);
            // error alert
          });
      } else {
        console.log("basket is empty");
        // redirect to cart
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

    // Stripe.js has not loaded yet. Make sure to disable
    // form submission until Stripe.js has loaded.
    if (!stripe || !elements) {
      dependenciesFailedToLoad();
    }
    // Do not allow submit for the following conditions
    if (error || isProcessing || disabled) {
      formContainsErrors(dispatch);
    }

    // check payment intent firstaddress
    if (paymentIntent) {
      // dont allow the user to resubmit card payment
      if (paymentIntent?.status === "isSuccessful" || isSuccessful) {
        paymentIntentAlreadySubmittied(dispatch);
      }

      // Allow submit
      if (paymentIntent.status !== "succeeded") {
        checkoutProcessing();

        // create an address later users can add one
        const address = {
          shipping_address: "84 Raccoon Run",
          shipping_state: "Washington",
          shipping_country: "US",
          shipping_zip_postal_code: "98106",
        };

        // confirm payment
        const payload = await confirmCardPayment(
          paymentIntent.client_secret,
          CardElement,
          address
        );

        await sendOrderToBackend(basket, payload, address);
      } else {
        return null;
      }
    } else {
      noPaymentIntent(
        dispatch,
        "There was a problem with our server processing your details. Please try again later."
      );
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
                        <div classNagenerateQuantitySelectorme="reviewProduct__info">
                          <p className="reviewProduct__title">{item.title}</p>
                          <div className="reviewProduct__price">
                            <div>
                              <p className="color-total">
                                <small>$</small>
                                {item.price}{" "}
                              </p>
                              <QuantitySelector quantity={item.quantity} />
                            </div>

                            <img src={PrimeLogo} alt="" />
                          </div>
                          <span className="color-mute">
                            Sold by:Amazon EU S.a.quantityr.L.
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

        <Aside disabled={disabled} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}

export default Index;
