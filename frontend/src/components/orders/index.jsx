import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Order from "./order";
import ProductImage from "../shared/product-image";

// import { db } from "../../adapters/firebase";
import data from "../../adapters/orderAdapter";

import { useStateValue } from "../../StateProvider";

import "./orders.css";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  const fetchOrders = () => {
    setOrders(data);
  };

  const GenerateOrder = () => {
    return orders.map((item) => {
      return (
        <div className="order">
          <div className="order__heading flex between text-secondary size-base">
            <div className="order__heading-left">
              <div className="flex between order-responsive">
                <div className="grid-space">
                  <p className="order__heading-title">Order placed </p>
                  <p>{item.order_placed}</p>
                </div>
                <div className="grid-space">
                  <p className="order__heading-title">Total</p>
                  <p>£{item.order_total}</p>
                </div>
                <div className="grid-space">
                  <p className="order__heading-title">Dispatch to</p>
                  <p className="alink-normal">{item.users.username}</p>
                </div>
              </div>
            </div>
            <div className="order__heading-right">
              <p>Order # {item.order_identifier} </p>
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
          <div className="order__content-container">
            <div className="order__content flex between left">
              <div className="x">
                <h2>Arriving tomorrow </h2>
                {item.products.map((product) => {
                  return (
                    <div className="flex between order-responsive">
                      <ProductImage
                        url={product.image.url}
                        classname="order__content-image"
                        alt="sub__card"
                      />

                      <div className="order__content-about">
                        <Link
                          to={`product/${product.id}`}
                          className="alink-normal"
                        >
                          {product.title}
                        </Link>

                        {/* <p className="text-base">
                          Morgan, Kieran Eligible for return until 15 Apr 2021
                        </p> */}

                        <div className="order__content-buttons flex">
                          <button className="btn-basic btn-basic-active">
                            Buy it again
                          </button>
                          <button className="btn-basic">View your item</button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="btn__content">
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
      );
    });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // useEffect(() => {
  //   if (user) {
  //     db.collection("users")
  //       .doc(user?.uid)
  //       .collection("orders")
  //       .orderBy("created", "desc")
  //       .onSnapshot((snapshot) =>
  //         setOrders(
  //           snapshot.docs.map((doc) => ({
  //             id: doc.id,
  //             data: doc.data(),
  //           }))
  //         )
  //       );
  //   } else {
  //     setOrders([]);
  //   }
  // }, [user]);

  return (
    <div className="order__container">
      <div className="container">
        <ul className="pagination flex reset-list">
          <li className="alink-normal">Your Account &gt; </li>
          <li className="text-company">Your Orders</li>
        </ul>
        <div className="order__container-heading">
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
          <div>
            <span className="text-bold">14 orders </span>
            <span>placed in</span>
          </div>

          <select name="" id="">
            <option value="3months">Last 30 days</option>
            <option value="3months">Past three months</option>
            <option value="3months">2021</option>
            <option value="3months">2020</option>
            <option value="3months">2019</option>
          </select>
        </div>

        <GenerateOrder />

        {/* <div className="orders__order">
          {orders?.map((order) => (
            <Order order={order} />
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default Orders;
