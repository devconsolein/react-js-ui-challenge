import React, { Component } from "react";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

export class Choose extends Component {
  state = {
    signup: true
  };
  SwitchToSignIn = () => {
    this.setState({ signup: false });
  };
  SwitchToSignUp = () => {
    this.setState({ signup: true });
  };
  render() {
    return (
      <div className="container-choose">
        <div className="choose-container">
          <div className="capsule">
            <span
              className={
                this.state.signup === true ? "signin" : "signin current"
              }
              onClick={this.SwitchToSignIn}
            >
              Sign In
            </span>
            <span
              className={
                this.state.signup === true ? "signup current" : "signup"
              }
              onClick={this.SwitchToSignUp}
            >
              Sign Up
            </span>
          </div>

          <main className="main">
            <h3>
              <span
                className={
                  this.state.signup === true ? "signin" : "signin current"
                }
                onClick={this.SwitchToSignIn}
              >
                Sign In
              </span>
              <span className="or"> or </span>
              <span
                className={
                  this.state.signup === true ? "signup current" : "signup"
                }
                onClick={this.SwitchToSignUp}
              >
                Sign Up
              </span>
            </h3>
            <div className="main-choose">
              {this.state.signup === true ? <Signup /> : <Signin />}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Choose;
