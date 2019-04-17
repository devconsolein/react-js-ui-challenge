import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div>
        <div className="input">
          <input
            className="input-input"
            type="text"
            placeholder="Enter Email Address"
          />
          <span className="input-icon ">
            Invite
            <i class="fas fa-arrow-right" />
          </span>
        </div>
      </div>
    );
  }
}

export default Input;
