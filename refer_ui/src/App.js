import React, { Component } from "react";
import image from "./image.svg";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import { Input } from "./Components/Input";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <div className="links">
              <div className="link link-first">
                <Link to="/" className="logo">
                  kiwi.com
                </Link>
                <Link to="/">Refer a friend</Link>
              </div>

              <div className="link link-second">
                <Link to="/">How it works</Link>
                <Link to="/">
                  menu
                  <i class="fas fa-angle-down" />{" "}
                </Link>
              </div>
              <div className="link link-third">
                <Link to="/">You have won Rs.40</Link>
              </div>
              <div className="link link-fourth">
                <a href="/" className="social-media">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="/" className="social-media">
                  <i class="fab fa-twitter" />
                </a>
                <a href="/" className="social-media">
                  <i class="fab fa-linkedin-in" />
                </a>
                <a href="/" className="social-media">
                  <i class="fab fa-instagram" />
                </a>
              </div>
            </div>
          </Switch>

          <main className="grid">
            <section className="section section1">
              <h1 className="heading">
                We value Friendship. At exactly Rs 2000
              </h1>
              <h3>
                Refer Your fiend to us each will get Rs. 2000 and you will also
                get Rs. 2000 for each who had booked their flight through
                Kiwi.Com
              </h3>
              <Input />
            </section>
            <section className="section section2">
              <img src={image} alt="" />
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
