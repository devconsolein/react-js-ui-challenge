import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Description } from "./Components/Description";
import { Image } from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Image />
          <Description />
        </div>
      </div>
    );
  }
}

export default App;
