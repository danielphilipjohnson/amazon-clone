import React from "react";

function index({ heading, content, link }) {
  return (
    <div className="sub-section">
      <h3 className="product__information__heading">{heading}</h3>
      <p className="font-normal">
        {content}
        <span className="alink-normal inline"> {link} </span>
      </p>
    </div>
  );
}

export default index;
