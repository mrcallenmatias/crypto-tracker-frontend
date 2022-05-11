import React, { Component } from "react";
import crypto from "../assets/backimg.jpeg";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="back-image"></div>
        <div>CRYPTO TRACKER</div>
        <div>DISCOVER NEW TOKEN</div>
        <p className="p">
          A new way of learning information about cryptocurrency.
        </p>
      </div>
    );
  }
}
