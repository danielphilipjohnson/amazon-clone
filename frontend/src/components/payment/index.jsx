import React, { useState, useEffect } from "react";
import "./payment.css";
import AmazonLogo from "../../images/amazon-logo-black.png";
import { useStateValue } from "../../StateProvider";
import PrimeLogo from "../../images/prime-logo.png";

// import CheckoutProduct from "../../shared/product/index";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer/reducer";

import axios from "../../axios";
import { db } from "../../adapters/firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);

  const [miniumPurchase, setMiniumPurchase] = useState(false);

  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

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
      // console.log(totalCharge);

      if (totalCharge > 1) {
        console.log(totalCharge);
        // need to send payment intent
        // Stripe expects the total in a currencies subunits

        // const response = await axios({
        //   method: "post",
        //   url: `/payments/create?total=${Math.round(
        //     getBasketTotal(basket) * 100
        //   )}`,
        // }).catch((thrown) => {
        //   console.log(thrown);
        // });
        // console.log(response);
        // console.log(response.data.clientSecret);
        // setClientSecret(response.data.clientSecret);
      } else {
        console.log("basket is empty");
      }
    };

    getClientSecret();
  }, [basket]);

  console.log("THE SECRET IS >>>", clientSecret);

  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (event) => {
    console.log("submitting");
    // do all the fancy stripe stuff...
    event.preventDefault();
    setProcessing(true);

    // problem is here

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        // paymentIntent = payment confirmation

        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.push("/orders");
      });
  };

  return (
    <div className="payment">
      <div className="payment__header">
        <img src={AmazonLogo} alt="Logo" />
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
      </div>
      <div className="payment__container">
        <div className="payment-card">
          {/* Payment section - delivery address */}
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

                      <form onSubmit={handleSubmit}>
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
                          <p className="reviewForm__heading">
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
              <button className="btn-amazon btn-amazon-active buynow__btn">
                Buy now
              </button>

              <div className="content">
                <h3 className="color-total">Order Total: $1.95</h3>
                <p>
                  By placing your order you agree to Amazon's Conditions of Use
                  & Sale. Please see our Privacy Notice, our Cookies Notice and
                  our Interest-Based Ads Notice.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="payment__priceContainer">
            <CurrencyFormat
              renderText={(value) => <h3>Order Total: {value}</h3>}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />

            {miniumPurchase ? (
              <button disabled={processing || disabled || succeeded} empty>
                <span>{processing ? <p>Processing</p> : "Buy Now"} </span>

                {console.log(miniumPurchase)}
              </button>
            ) : (
              "basket empty"
            )}
          </div> */}
        </div>

        <div className="payment__aside">
          <div className="payment__aside__body">
            <button className="btn-amazon btn-amazon-active f-width">
              Buy now
            </button>
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
                  {/* {miniumPurchase ? (
                    <button
                      disabled={processing || disabled || succeeded}
                      empty
                    >
                      <span>{processing ? <p>Processing</p> : "Buy Now"} </span>

                      {console.log(miniumPurchase)}
                    </button>
                  ) : (
                    "basket empty"
                  )} */}
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
    </div>
  );
}

export default Payment;
