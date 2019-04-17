import React, { Component } from "react";

export class Signin extends Component {
  render() {
    return (
      <form className="signincomponent">
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
        <label htmlFor="conpassword">Confirm Password</label>
        <input
          type="password"
          name="conpassword"
          id="conpassword"
          placeholder="Confirm password"
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
            Sign in
          </button>
          <p className="alternate">Do not had an account</p>
        </div>
      </form>
    );
  }
}

export default Signin;
