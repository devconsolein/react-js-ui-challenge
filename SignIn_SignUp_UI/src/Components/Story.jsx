import React, { Component } from "react";
import rocket from "../rocket.svg";
export class Story extends Component {
  render() {
    return (
      <div className="container-story">
        <div className="logo">
          <img src="https://cdn.onlinewebfonts.com/svg/img_186215.png" alt="" />
        </div>
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
          dolor. Nobis, corporis?
        </h1>
        <div className="image">
          <img src={rocket} alt="" />
        </div>
        <div className="rounds">
          <span className="round" />
          <span className="round" />
          <span className="round" />
          <span className="round" />
          <span className="round" />
        </div>
      </div>
    );
  }
}

export default Story;
