import React, { Component } from "react";

export class Description extends Component {
  render() {
    return (
      <div className="desc">
        <h1>Shot.to</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
          reprehenderit in. Animi beatae dignissimos fugiat optio. Voluptas mo.
        </p>
        <h3>Join the List to get updated</h3>
        <div className="input-container">
          <input
            placeholder="Enter your Email Address"
            type="text"
            className="input"
          />
          <button type="button" className="button">
            Subscribe
          </button>
        </div>
        <div className="logos">
          <span className="comming">Comming soon on</span>
        </div>
      </div>
    );
  }
}

export default Description;
