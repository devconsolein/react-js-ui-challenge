import React, { useState } from "react";
import "./App.css";
import bgc from "./bgc.jpg";

import Description from "./Components/Description";
import Images from "./Components/Images";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url("${bgc}")`,
        backgroundPosition: "50% 50%",
        backgroundSize: "Cover",
        backgroundRepeat: "norepeat",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: " 50px 150px"
      }}
    >
      <div className="container">
        <Images />
        <Description />
      </div>
    </div>
  );
};
export default App;
