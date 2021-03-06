import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// move to a layout component
import Header from "./components/sitewide/header";
import Subheader from "./components/sitewide/subheader";
import ProductList from "./components/shared/product-list";
import Footer from "./components/sitewide/footer";

import SectionNav from "./components/shared/section-nav/";

/* Routes */
import Orders from "./routes/orders";
import Login from "./routes/login";
import Checkout from "./routes/checkout";
import Payment from "./routes/payment";
import Home from "./routes/home";
import Products from "./routes/products";
import Product from "./routes/product";

import { auth } from "./adapters/firebase";

import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";

import "./App.css";

const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
function App() {
  const [{}, dispatch] = useStateValue();
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
          <Route path="/orders">
            <Header />
            <Subheader />
            <SectionNav />
            <Orders />
            <ProductList title="Recommended based on your purchase" />
            <ProductList title={"Browsing History"} />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Subheader />
            <SectionNav />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/search">
            <Header />
            <Subheader />
            <SectionNav />
            <Products />
            <Footer />
          </Route>
          <Route path="/product/:id">
            <Header />
            <Subheader />
            <SectionNav />
            <Product />
            <Footer />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Subheader />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
