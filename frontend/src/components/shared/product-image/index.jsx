import React from "react";
import baseUrl from "../../../adapters";
function index({ url, classname }) {
  return <img src={baseUrl + url} className={classname} />;
}

export default index;
