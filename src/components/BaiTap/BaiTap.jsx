import React, { Component } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import PageContent from "./PageContent";
import Footer from "./Footer";

export default class BaiTap extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <PageContent />
        <Footer />
      </div>
    );
  }
}
