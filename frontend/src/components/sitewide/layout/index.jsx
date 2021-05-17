import React from "react";
import Header from "../header";
import Subheader from "../subheader";
import Footer from "../footer";

function Index({ children }) {
  return (
    <>
      <Header />
      <Subheader />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Index;
