import React from "react";
import baseUrl from "../../../adapters";
function index({ url, classname, alt }) {
  return <img src={baseUrl + url} className={classname} alt={alt} />;
}

export default index;
