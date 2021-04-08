import React, { useRef } from "react";
import { useStateValue } from "../../../../StateProvider";
import "./alert-box.css";
import TickIcon from "./icons/tickIcon.svg";
import DangerIcon from "./icons/danger.svg";

function Index() {
  const [{ alert }, dispatch] = useStateValue();

  const closeBoxRef = useRef();

  const AlertIcon = () => {
    if (alert.type === "Danger") {
      return DangerIcon;
    }
    if (alert.type === "Success") {
      return TickIcon;
    }
  };

  const closeAlert = () => {
    closeBoxRef.current.className = "box box__close";

    setTimeout(() => {
      dispatch({
        type: "CLOSE_ALERT",
        payload: false,
      });
    }, 2000);
  };

  if (alert.isOpen) {
    return (
      <div className="box" ref={closeBoxRef}>
        <div className="box__inner">
          <img className="box-icon" src={AlertIcon()} alt={alert.type} />
          <div className="message">
            <h3>{alert.type}</h3>
            <p>{alert.message}</p>
          </div>
          <div className="close__button">
            <button onClick={closeAlert}>Close</button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Index;
