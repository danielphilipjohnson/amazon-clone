import React, { useState, useEffect } from "react";
import { db } from "../../adapters/firebase";
import "./orders.css";
import { useStateValue } from "../../StateProvider";
import Order from "./order";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="order__container">
      <div className="container">
        <ul className="pagination flex reset-list">
          <li className="alink-normal">Your Account &gt; </li>
          <li className="text-company">Your Orders</li>
        </ul>
        <div className="order__container-heading flex between">
          <h1>Your Orders</h1>
          <div className="order__container-form">
            <input
              type="search"
              name="searchOrders"
              id=""
              placeholder="Search all orders"
            />
            <button>Search Orders</button>
          </div>
        </div>

        <div className="tabs">
          <button className="btn-tab btn-tab--active">
            Saved for later (26 items){" "}
          </button>

          <button className="btn-tab">Open Orders</button>
          <button className="btn-tab">Buy it again</button>
          <button className="btn-tab">Local Store Orders</button>
          <button className="btn-tab">Amazon Pay</button>
          <button className="btn-tab">Cancelled Orders </button>
        </div>

        <div className="order__container-overview">
          <span className="text-bold">14 orders </span>
          <span>placed in</span>
          <select name="" id="">
            <option value="3months">Last 30 days</option>
            <option value="3months">Past three months</option>
            <option value="3months">2021</option>
            <option value="3months">2020</option>
            <option value="3months">2019</option>
          </select>
        </div>

        <div className="order">
          <div className="order__heading flex between text-secondary size-base">
            <div className="order__heading-left">
              <div className="flex between">
                <div className="grid-space">
                  <p className="order__heading-title">Order placed </p>
                  <p>30 March 2021</p>
                </div>
                <div className="grid-space">
                  <p className="order__heading-title">Total</p>
                  <p>£0.99</p>
                </div>
                <div className="grid-space">
                  <p className="order__heading-title">Dispatch to</p>
                  <p className="alink-normal">username</p>
                </div>
              </div>
            </div>
            <div className="order__heading-right">
              <p>Order # D01-2530434-6632641 </p>
              <p>
                <span className="alink-normal alink-normal-inline">
                  Order Details
                </span>
                <span> | </span>
                <span className="alink-normal alink-normal-inline">
                  Invoice
                </span>
              </p>
            </div>
          </div>
          <div className="order__content">
            <div className="flex between">
              <div className="x">
                <h2>Arriving tomorrow </h2>
                <div className="flex between">
                  <img
                    src="https://source.unsplash.com/random"
                    className="order__content-heading"
                  />
                  <div className="order__content-about">
                    <p className="alink-normal">
                      Funko Mr. Robot Pop Vinyl Figure 482 Elliot Masked SDCC
                      Summer Convention Exclusives, 9879{" "}
                    </p>
                    <p className="text-base">
                      Morgan, Kieran Eligible for return until 15 Apr 2021
                    </p>
                    <div className="order__content-buttons flex">
                      <button className="btn-basic btn-basic-active">
                        Buy it again
                      </button>
                      <button className="btn-basic">View your item</button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="btn-group">
                <button className="btn-basic btn-basic-active f-width">
                  Track package
                </button>
                <br />
                <button className="btn-basic f-width">Return Items</button>
                <button className="btn-basic f-width">
                  Share gift receipt
                </button>
                <button className="btn-basic f-width">
                  Leave seller feedback
                </button>
                <button className="btn-basic f-width">
                  Write a product review
                </button>
              </div>
            </div>
          </div>
          <div className="order__footer">
            <p className="alink-normal">Archive order</p>
          </div>
        </div>

        <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Orders;
