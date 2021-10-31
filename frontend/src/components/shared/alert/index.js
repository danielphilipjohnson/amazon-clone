import { useEffect } from "react";
import { createPortal } from "react-dom";

const AlertPortal = ({ children }) => {
  const mount = document.getElementById("alert-root");
  const el = document.createElement("div");

  useEffect(() => {
    mount.appendChild(el);
    return () => mount.removeChild(el);
  }, [el, mount]);

  return createPortal(children, el);
};

export default AlertPortal;
