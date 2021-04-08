import React from "react";
import PaymentContainer from "./container";
import Header from "./header";
import "./payment.css";

function Payment() {
  return (
    <div className="payment">
      <Header />
      <PaymentContainer />
    </div>
  );
}

export default Payment;
