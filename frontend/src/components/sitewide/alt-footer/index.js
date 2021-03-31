import React from "react";
import "./alt-footer.css";

function AltFooter() {
  return (
    <div className="alt-footer">
      <div className="divider"></div>
      <ul className="alt-footer__list">
        <li className="alt-footer__list--item">Conditions of Use </li>
        <li className="alt-footer__list--item">Privacy Notice </li>
        <li className="alt-footer__list--item">Help </li>
        <li className="alt-footer__list--item">Cookies Notice</li>
        <li className="alt-footer__list--item">Interest-Based Ads Notice</li>
      </ul>
      <p className="alt-footer__copyright">
        © This is a fake amazon clone. It is only intended as a project piece.
      </p>
    </div>
  );
}

export default AltFooter;
