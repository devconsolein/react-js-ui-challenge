import React from "react";
import "./App.css";

import logo from "./logo.svg";

const App = () => {
  return (
    <div
      style={{
        backgroundColor: "#0241E2",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          width: "60%",
          height: "70%",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          padding: "20px",
          boxShadow: "2px 2px 20px #333",
          borderRadius: "5px"
        }}
      >
        <img
          style={{
            width: "150px",
            height: "auto",
            marginTop: "10px"
          }}
          src={logo}
          alt=""
        />
        <h1
          style={{
            fontWeight: "bold",
            fontSize: "3.5rem",
            marginTop: "10px",
            textAlign: "center"
          }}
        >
          Don't miss the new designs!
        </h1>
        <p
          style={{
            fontSize: "2.0rem",
            textAlign: "center",
            color: "rgba(#000,.1)",
            padding: "0 100px",
            marginBottom: "30px"
          }}
        >
          Enter your email to recieve daily round-up of most submissions
        </p>

        <form
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            width: "-webkit-fill-available",
            padding: "5px 50px"
          }}
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email here"
            style={{
              outline: "none",
              border: "none",
              padding: "9px  35px",
              textAlign: "center",
              border: "2px solid rgba(#333 ,.1)",
              width: "inherit",
              fontSize: "2rem"
            }}
          />
          <input
            type="submit"
            value="Subscribe"
            style={{
              textTransform: "uppercase",
              padding: "15px 50px",
              margin: "25px",
              color: "#fff",
              backgroundColor: "#0241E2",
              boxShadow: "2px 2px 20px #404142",
              outline: "none",
              border: "none",
              borderRadius: "2px",
              letterSpacing: "2px"
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default App;
