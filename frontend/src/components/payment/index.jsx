import React from "react";
import PaymentContainer from "./container";
import Header from "./header";
import "./payment.css";
import { useStateValue } from "../../StateProvider";

function Payment() {
  const [{ basket }] = useStateValue();

  return (
    <div className="payment">
      <Header basketLength={basket?.length} />
      <PaymentContainer />
    </div>
  );
}

export default Payment;
