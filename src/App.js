import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Choose } from "./Components/Choose";
import { Story } from "./Components/Story";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Story />
          <Choose />
        </div>
      </div>
    );
  }
}

export default App;
