import React from "react";
import TechnicalDetails from "./technical-details";

import SubSection from "../shared/sub-section";
import "./information.css";

function index() {
  return (
    <>
      <p className="product__information__title"> Product information </p>

      <div className="product__information">
        <TechnicalDetails />

        <div className="addtional-information">
          <h3 className="product__information__heading">
            Additional Information
          </h3>
          <table>
            <tbody>
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
                  13,070 in Toys & Games
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
            </tbody>
          </table>

          <SubSection
            heading="Warranty & Support"
            content="Amazon.com Return Policy: Regardless of your statutory right
            of withdrawal, you enjoy a 30-day right of return for many
            products. For exceptions and conditions, see"
            link="Return details."
          />

          <SubSection
            heading="Feedback"
            content="Would you like to"
            link="tell us about a lower price?"
          />
        </div>
      </div>
    </>
  );
}

export default index;
