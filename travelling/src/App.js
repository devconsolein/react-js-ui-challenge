import React from "react";
import "./App.css";
import Description from "./Components/Description.jsx";
import Image from "./Components/Image";

const App = () => {
  const st1 = {
    backgroundColor: "#FFF7F7",
    height: "100vh",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    overflow: "hidden"
  };
  return (
    <div style={st1}>
      <Description />
      <Image />
    </div>
  );
};

export default App;
