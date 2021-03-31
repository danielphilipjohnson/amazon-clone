import React, { useState, useEffect } from "react";
import { db } from "../../adapters/firebase";
import "./orders.css";
import { useStateValue } from "../../StateProvider";
import baseUrl from "../../adapters";
import Order from "./order";

const data = [
  {
    id: 1,
    order_total: 45.99,
    order_placed: "2021-03-31T11:00:00.000Z",
    person_dispatch: null,
    order_identifier: "a9491b36-9223-11eb-a8b3-0242ac130003",
    users: {
      id: 1,
      username: "abc@gmail.com",
      email: "abc@gmail.com",
      provider: "local",
      confirmed: false,
      blocked: false,
      role: 1,
      created_at: "2021-03-31T13:16:34.875Z",
      updated_at: "2021-03-31T13:16:34.880Z",
    },
    published_at: "2021-03-31T13:19:52.414Z",
    created_at: "2021-03-31T13:19:21.749Z",
    updated_at: "2021-03-31T13:19:52.439Z",
    products: [
      {
        id: 2,
        title: "His and Hers rings",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: null,
        published: null,
        delivery: true,
        category: "Jewellery",
        published_at: "2021-03-19T16:24:37.182Z",
        created_at: "2021-03-19T16:24:32.064Z",
        updated_at: "2021-03-27T14:48:11.685Z",
        image: {
          id: 2,
          name: "51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
          alternativeText: "",
          caption: "",
          width: 640,
          height: 369,
          formats: {
            thumbnail: {
              name: "thumbnail_51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
              hash:
                "thumbnail_51_UD_Ez_MJ_Vp_L_AC_UL_640_QL_65_ML_3_fe9a1a510a",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 245,
              height: 141,
              size: 6.72,
              path: null,
              url:
                "/uploads/thumbnail_51_UD_Ez_MJ_Vp_L_AC_UL_640_QL_65_ML_3_fe9a1a510a.jpg",
            },
            small: {
              name: "small_51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
              hash: "small_51_UD_Ez_MJ_Vp_L_AC_UL_640_QL_65_ML_3_fe9a1a510a",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 500,
              height: 288,
              size: 17.36,
              path: null,
              url:
                "/uploads/small_51_UD_Ez_MJ_Vp_L_AC_UL_640_QL_65_ML_3_fe9a1a510a.jpg",
            },
          },
          hash: "51_UD_Ez_MJ_Vp_L_AC_UL_640_QL_65_ML_3_fe9a1a510a",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 15.04,
          url: "/uploads/51_UD_Ez_MJ_Vp_L_AC_UL_640_QL_65_ML_3_fe9a1a510a.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          created_at: "2021-03-19T16:24:15.382Z",
          updated_at: "2021-03-19T16:24:15.394Z",
        },
      },
      {
        id: 3,
        title: "Purple hoodie",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        price: null,
        published: null,
        delivery: true,
        category: "Clothes",
        published_at: "2021-03-19T16:25:37.737Z",
        created_at: "2021-03-19T16:25:32.946Z",
        updated_at: "2021-03-27T14:48:37.499Z",
        image: {
          id: 3,
          name: "51Y5NI-I5jL._AC_UX679_.jpg",
          alternativeText: "",
          caption: "",
          width: 679,
          height: 900,
          formats: {
            thumbnail: {
              name: "thumbnail_51Y5NI-I5jL._AC_UX679_.jpg",
              hash: "thumbnail_51_Y5_NI_I5j_L_AC_UX_679_da4878ad9d",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 118,
              height: 156,
              size: 4.02,
              path: null,
              url: "/uploads/thumbnail_51_Y5_NI_I5j_L_AC_UX_679_da4878ad9d.jpg",
            },
            medium: {
              name: "medium_51Y5NI-I5jL._AC_UX679_.jpg",
              hash: "medium_51_Y5_NI_I5j_L_AC_UX_679_da4878ad9d",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 566,
              height: 750,
              size: 33.61,
              path: null,
              url: "/uploads/medium_51_Y5_NI_I5j_L_AC_UX_679_da4878ad9d.jpg",
            },
            small: {
              name: "small_51Y5NI-I5jL._AC_UX679_.jpg",
              hash: "small_51_Y5_NI_I5j_L_AC_UX_679_da4878ad9d",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 377,
              height: 500,
              size: 19.41,
              path: null,
              url: "/uploads/small_51_Y5_NI_I5j_L_AC_UX_679_da4878ad9d.jpg",
            },
          },
          hash: "51_Y5_NI_I5j_L_AC_UX_679_da4878ad9d",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 31.21,
          url: "/uploads/51_Y5_NI_I5j_L_AC_UX_679_da4878ad9d.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          created_at: "2021-03-19T16:25:13.991Z",
          updated_at: "2021-03-19T16:25:14.003Z",
        },
      },
    ],
  },
  {
    id: 2,
    order_total: 399.99,
    order_placed: "2021-03-10T12:00:00.000Z",
    person_dispatch: null,
    order_identifier: "ccc1beb0-9223-11eb-a8b3-0242ac130003",
    users: {
      id: 1,
      username: "abc@gmail.com",
      email: "abc@gmail.com",
      provider: "local",
      confirmed: false,
      blocked: false,
      role: 1,
      created_at: "2021-03-31T13:16:34.875Z",
      updated_at: "2021-03-31T13:16:34.880Z",
    },
    published_at: "2021-03-31T13:20:57.627Z",
    created_at: "2021-03-31T13:20:55.289Z",
    updated_at: "2021-03-31T13:20:57.644Z",
    products: [
      {
        id: 29,
        title: "Corsair 16gb DDR4 ram 3200mhz",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        price: null,
        published: null,
        delivery: true,
        category: "Computers",
        published_at: "2021-03-19T18:33:21.615Z",
        created_at: "2021-03-19T18:33:17.734Z",
        updated_at: "2021-03-27T16:39:22.554Z",
        image: {
          id: 30,
          name: "item2.jpg",
          alternativeText: "",
          caption: "",
          width: 324,
          height: 200,
          formats: {
            thumbnail: {
              name: "thumbnail_item2.jpg",
              hash: "thumbnail_item2_b3638529f7",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 245,
              height: 151,
              size: 8.92,
              path: null,
              url: "/uploads/thumbnail_item2_b3638529f7.jpg",
            },
          },
          hash: "item2_b3638529f7",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 12.84,
          url: "/uploads/item2_b3638529f7.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          created_at: "2021-03-19T18:32:40.874Z",
          updated_at: "2021-03-19T18:32:40.882Z",
        },
      },
      {
        id: 34,
        title: "Samsung SSD 500gb",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        price: null,
        published: null,
        delivery: true,
        category: "Electronics",
        published_at: "2021-03-19T18:39:26.426Z",
        created_at: "2021-03-19T18:39:22.685Z",
        updated_at: "2021-03-27T16:42:59.217Z",
        image: {
          id: 35,
          name: "item7.jpg",
          alternativeText: "",
          caption: "",
          width: 285,
          height: 200,
          formats: {
            thumbnail: {
              name: "thumbnail_item7.jpg",
              hash: "thumbnail_item7_fd9407e1f5",
              ext: ".jpg",
              mime: "image/jpeg",
              width: 222,
              height: 156,
              size: 4.31,
              path: null,
              url: "/uploads/thumbnail_item7_fd9407e1f5.jpg",
            },
          },
          hash: "item7_fd9407e1f5",
          ext: ".jpg",
          mime: "image/jpeg",
          size: 4.82,
          url: "/uploads/item7_fd9407e1f5.jpg",
          previewUrl: null,
          provider: "local",
          provider_metadata: null,
          created_at: "2021-03-19T18:38:55.247Z",
          updated_at: "2021-03-19T18:38:55.258Z",
        },
      },
    ],
  },
];

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  const GenerateOrder = () => {
    return data.map((item) => {
      console.log(item);
      return (
        <div className="order">
          <div className="order__heading flex between text-secondary size-base">
            <div className="order__heading-left">
              <div className="flex between">
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
          <div className="order__content">
            <div className="flex between">
              <div className="x">
                <h2>Arriving tomorrow </h2>
                {item.products.map((product) => {
                  return (
                    <div className="flex between">
                      <img
                        src={baseUrl + product.image.url}
                        className="order__content-heading"
                      />
                      <div className="order__content-about">
                        <p className="alink-normal">{product.title}</p>
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
                  );
                })}
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
      );
    });
  };

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

        <GenerateOrder />

        {/* <div className="order">
         
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
        </div> */}

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
