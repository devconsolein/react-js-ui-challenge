import React, { Component } from "react";

export class Signup extends Component {
  render() {
    return (
      <form className="signupcomponent">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          name="FullName"
          placeholder="FullName"
          id="name"
          className="name"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
          className="password"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          placeholder="email"
          name="email"
          id="email"
          className="email"
        />
        <div className="important">
          <input type="checkbox" name="check" id="notice" />
          <p id="notice" className="notice">
            Lorem ipsum dolor sit
            <span className="terms">amet consectetur</span>
          </p>
        </div>

        <div className="signupcomponent-buttons">
          <button type="button" className="button">
            Sign Up
          </button>
          <p className="alternate">I had an account</p>
        </div>
      </form>
    );
  }
}

export default Signup;
