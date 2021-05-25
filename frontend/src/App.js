import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// move to a layout component
import AlertPortal from "./components/shared/alert";
import AlertBox from "./components/shared/alert/box";

import Layout from "./components/sitewide/layout";
import ProductList from "./components/shared/product-list";

import SectionNav from "./components/shared/section-nav/";

/* Routes */
import Orders from "./routes/orders";
import Login from "./routes/login";
import Checkout from "./routes/checkout";
import Payment from "./routes/payment";
import Home from "./routes/home";
import Product from "./routes/product";
import Products from "./routes/products";
import { auth } from "./adapters/firebase";

import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
function App() {
  const [{ alert }, dispatch] = useStateValue();
  // let { slug } = useParams();
  useEffect(() => {
    // run once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          ghfgf
          <Route path="/orders">
            <Layout>
              <SectionNav />
              <Orders />
              <ProductList title="Recommended based on your purchase" />
              <ProductList title={"Browsing History"} />
            </Layout>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Layout>
              <SectionNav />
              <Checkout />
            </Layout>
          </Route>
          <Route path="/search/">
            <Layout>
              <SectionNav />
              <Products />
            </Layout>
          </Route>
          <Route path="/product/:id">
            <Layout>
              <SectionNav />
              <Product />
            </Layout>
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Layout>
              <Home />
            </Layout>
          </Route>
        </Switch>

        <AlertPortal>
          <AlertBox alert={alert} />
        </AlertPortal>
      </div>
    </Router>
  );
}

export default App;
