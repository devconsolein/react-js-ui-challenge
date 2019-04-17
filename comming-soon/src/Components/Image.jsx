import React, { Component } from "react";
import phone from "../phone.svg";

export class Image extends Component {
  render() {
    return (
      <div className="images">
        <div className="clip" />
        <img src={phone} alt="" />
      </div>
    );
  }
}

export default Image;
