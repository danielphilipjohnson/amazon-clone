import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import PrimeLogo from "../../images/prime-logo.png";

import "./products.css";
function Index() {
  let { path, url } = useRouteMatch();
  return (
    <div>
      <aside className="form-navigation">
        <div className="form-navigation__group prime">
          <h3>Amazon Prime</h3>
          <div className="form-navigation__prime">
            <input type="checkbox" name="prime" id="prime" />
            <img src={PrimeLogo} alt="prime" />
          </div>
        </div>

        <div className="form-navigation__group">
          <h3> New Arrivals </h3>
          <div className="form-navigation__text">
            <p>Last 30 days</p>
            <p>Last 90 days</p>
            <p>Next 90 days</p>
          </div>
        </div>
        <div className="form-navigation__group">
          <h3>Department</h3>
          <ul>
            <li>Chosen department</li>
          </ul>
        </div>
        <div className="form-navigation__group">
          <h3> Avg. Customer Review </h3>
          <div className="form-navigation__text">
            <div className="form-navigation__text">
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
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>

              <span>& up</span>
            </div>

            <div className="form-navigation__text">
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
                ☆
              </span>
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>
              <span>& up</span>
            </div>

            <div className="form-navigation__text">
              <span role="img" aria-labelledby="star rating">
                🌟
              </span>
              <span role="img" aria-labelledby="star rating">
                🌟
              </span>
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>

              <span>& up</span>
            </div>
            <div className="form-navigation__text">
              <span role="img" aria-labelledby="star rating">
                🌟
              </span>
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>
              <span role="img" aria-labelledby="star rating">
                ☆
              </span>
              <span>& up</span>
            </div>
          </div>
        </div>

        <div className="form-navigation__group">
          <h3>Price</h3>
          <div className="form-navigation__text">
            <p> Up to £5</p>
            <p>£5 to £10</p>
            <p>£10 to £20</p>
            <p>£20 to £50</p>
            <p>£50 & above</p>
          </div>
        </div>

        <div className="form-navigation__group form ">
          <span className="currency">£</span>
          <input
            className="input-price"
            type="text"
            name="min"
            id="min"
            placeholder="Min"
          />
          <span className="currency">£</span>
          <input
            className="input-price"
            type="text"
            name="max"
            id="max"
            placeholder="Max"
          />
          <input className="go" type="button" value="Go" />
        </div>
        <div className="form-navigation__group">
          <h3>Condition</h3>
          <div className="form-navigation__text">
            <p>New</p>
            <p>Used</p>
          </div>
        </div>
      </aside>
      <p>List of products</p>
      <ul>
        <li>
          <Link to={`${url}/1`}>Product 1</Link>
        </li>
        <li>
          <Link to={`${url}/2`}>Product 2</Link>
        </li>
        <li>
          <Link to={`${url}/3`}>Project 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Index;
