import React, { Component } from "react";
import pot from "./pot.jpg";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
          <span className="navs nav1">
            <i className="fa fa-chevron-left" />
            <span className="text">Go Back to All Plants</span>
          </span>
          <span className="navs nav2">
            <i className="fa fa-heart" />
          </span>
        </div>
        <main className="grid">
          <section className="sections section1">
            <img src={pot} alt="" />
          </section>
          <section className="sections section2">
            <h1>Classic Peace Lily</h1>
            <h3>Popular house plant</h3>
            <span className="price">$ 81</span>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur. Repellendus recusandae corrupti aspernatur temporibus
              expedita.
            </p>
            <div className="buttons">
              <button className="button">Add To Cart</button>
              <button className="button">WishList</button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
