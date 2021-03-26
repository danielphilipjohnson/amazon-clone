import React from "react";
import PrimeLogo from "../../images/prime-logo.png";
import ProductList from "../shared/product-list";
import "./product.css";
function Product({ id }) {
  return (
    <>
      <div className="page">
        <div className="container">
          <div className="product-container">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="product__fullimage"
            />
            <div className="product-description">
              <div className="product-description__header">
                <h2 className="product-description__heading">
                  Funko 39048 POP Vinyl: Games: Fortnite: Loot Lama Collectible
                  Figure, Multicolour
                </h2>
                <a href="/" className="product-description__link alink-normal">
                  Visit store
                </a>
                <p>⭐⭐⭐⭐</p>
              </div>
              <div className="product-description__main">
                <div className="product-description__main__pricing">
                  <p>
                    RRP: <s>£29.19</s>
                  </p>
                  <div className="product-description__primelogo">
                    <span className="product-description__primelogo-item">
                      Price:
                    </span>
                    <span className="product-description__primelogo-item color-total">
                      £13.99
                    </span>
                    <img
                      className="product-description__primelogo-item"
                      src={PrimeLogo}
                    />
                    <span>FREE One-Day</span>
                  </div>
                  <p>
                    You Save: <span className="color-total">£15.20(52%)</span>
                  </p>
                </div>

                <div className="product-description__main__extra">
                  <p className="product-description__main__extra-text">
                    May be available at a lower price from{" "}
                    <span className="alink-normal inline">other sellers</span>,
                    potentially without free Prime shipping.{" "}
                  </p>
                  <p className="product-description__main__extra-text">
                    <b>Note:</b> This item is eligible for{" "}
                    <b>FREE click and collect</b> without a minimum order.
                    <span className="alink-normal inline"> Details</span>
                  </p>
                  <p className="product-description__main__extra-text">
                    <span className="alink-normal inline">New (5) </span>from
                    <span className="color-total">£10.03 </span>{" "}
                    <b>& FREE Delivery</b>
                  </p>

                  <ul className="reset-list">
                    <li className="flex between">
                      <b>Brand</b>
                      <p>Funko</p>
                    </li>
                    <li className="flex between">
                      <b>Material</b>
                      <p>Vinyl</p>
                    </li>
                    <li className="flex between">
                      <b>Size</b>
                      <p>6.4 x 6.4 x 9.5 centimetres</p>
                    </li>
                    <li className="flex between">
                      <b> Item weight </b>
                      <p>0.3 Pounds</p>
                    </li>
                  </ul>
                </div>

                <div className="product-description__about">
                  <h2 className="product-description__about-heading">
                    About this item
                  </h2>
                  <ul className="product-description__about-list reset-list">
                    <li className="">
                      <p>
                        From Dragon Ball Z, Vegetal, as a stylized POP vinyl
                        from Funko
                      </p>
                    </li>
                    <li className="">
                      <p>
                        Stylized collectable stands 3 ¾ inches tall, perfect for
                        any Dragon Ball Z fan{" "}
                      </p>
                    </li>
                    <li className="">
                      <p>Collect and display all Dragon Ball Z POP Vinyl's </p>
                    </li>
                    <li className="">
                      <p>
                        Funko POP is the 2018 Toy of the Year and People's
                        Choice award winner{" "}
                      </p>
                    </li>
                  </ul>
                  <p className="alink-normal">See more product details</p>
                </div>
              </div>
            </div>
            <div className="product-form">
              <h3 className="color-total">$13.99</h3>
              <div className="product-description__primelogo">
                <img
                  className="product-description__primelogo-item"
                  src={PrimeLogo}
                />
                <span>FREE One-Day</span>
              </div>
              <div className="product-form__delivery">
                <p>
                  FREE delivery: <b>Tomorrow</b> Order within 8 hrs 29 mins{" "}
                  <span className="alink-normal">Details</span>
                </p>
              </div>
              <div className="product-form__stock color-success">
                <p>Only 12 left in stock (more on the way). </p>
              </div>

              <div className="product-form__quantity">
                <label htmlFor="quantity">Quantity: </label>
                <select name="quantity" id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div className="btns">
                <button className="btn-amazon btn-amazon-pill btn-amazon-active">
                  Add to Basket
                </button>
                <button className="btn-amazon btn-amazon-pill btn-amazon-buynow">
                  Buy Now
                </button>
              </div>

              <div className="secure-box">
                <img
                  src="https://img.icons8.com/ios/250/000000/lock.png"
                  alt=""
                  className="padlock"
                />
                <p className="alink-normal">Secure transaction</p>
              </div>

              <p className="product-form__dispatch">
                Dispatched from and sold by Amazon.{" "}
              </p>
              <button>Add to list</button>
            </div>
          </div>
          <p className="product__information__title"> Product information </p>

          <div className="product__information">
            <div className="technical__details">
              <h3 className="product__information__heading">
                Technical Details
              </h3>
              <table>
                <tr className="tr">
                  <th className="td t-left"> Product Dimensions </th>
                  <td className="td">6.35 x 6.35 x 9.53 cm; 0.21 Grams </td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Manufacturer recommended age </th>
                  <td className="td">6 years and up</td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Item model number </th>
                  <td className="td">39697</td>
                </tr>
                <tr className="tr">
                  <th className="td t-left">
                    Manufacturer's Suggested Maximum Weight
                  </th>
                  <td className="td"> 2 Kilograms </td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Language: </th>
                  <td className="td">English</td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Number of Puzzle Pieces </th>
                  <td className="td">1</td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Assembly Required </th>
                  <td className="td">No</td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Batteries Required? </th>
                  <td className="td">No</td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Batteries included? </th>
                  <td className="td">No</td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Material Type(s) </th>
                  <td className="td">Vinyl</td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Material Composition </th>
                  <td className="td"> 100% Cotton </td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Release date </th>
                  <td className="td"> 21 July 2019 </td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Mfg Recommended age </th>
                  <td className="td"> 6 - 99 years </td>
                </tr>
              </table>
            </div>

            <div className="addtional-information">
              <h3 className="product__information__heading">
                Additional Information
              </h3>
              <table>
                <tr className="tr">
                  <th className="td t-left"> Customer Reviews </th>
                  <td className="td">
                    <p>
                      <span role="img" aria-labelledby="star rating">
                        🌟
                      </span>
                      <span role="img" aria-labelledby="star rating">
                        🌟
                      </span>
                      <span role="img" aria-labelledby="star rating">
                        🌟
                      </span>
                      <span role="img" aria-labelledby="star rating">
                        🌟
                      </span>
                    </p>
                    <p> 4.8 out of 5 stars </p>
                  </td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Best Sellers Rank </th>
                  <td className="td">
                    13,070 in Toys & Games{" "}
                    <span className="alink-normal inline">
                      (See Top 100 in Toys & Games)
                    </span>
                    <span> 75 in </span>
                    <span className="alink-normal inline">
                      Chibi Character Figures
                    </span>
                  </td>
                </tr>
                <tr className="tr">
                  <th className="td t-left"> Date First Available </th>
                  <td className="td"> 15 Mar. 2019 </td>
                </tr>
              </table>

              <div className="sub-section">
                <h3 className="product__information__heading">
                  Warranty & Support
                </h3>
                <p className="font-normal">
                  Amazon.com Return Policy:Regardless of your statutory right of
                  withdrawal, you enjoy a 30-day right of return for many
                  products. For exceptions and conditions, see{" "}
                  <span className="alink-normal inline">Return details.</span>
                </p>
              </div>

              <div className="sub-section">
                <h3 className="product__information__heading">
                  Warranty & Support
                </h3>

                <p className="font-normal">
                  Would you like to
                  <span className="alink-normal inline">
                    tell us about a lower price?
                  </span>
                </p>
              </div>
            </div>
          </div>

          <ProductList title="Customers who viewed this item also viewed" />
          <ProductList title="More items to explore" />
          <ProductList title="Products related to this item" />
        </div>
      </div>
    </>
  );
}

export default Product;
