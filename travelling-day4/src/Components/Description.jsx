import React, { useState } from "react";
import PropTypes from "prop-types";

import "../App.css";

const Description = props => {
  const [email, setEmail] = useState("");
  const [hasEmail, setHasEmail] = useState(false);
  const setEmailOnInput = e => {
    if (!e) {
      return "";
    }
    setEmail(e.target.value);
  };
  const doneAdding = e => {
    if (email !== null) {
      setHasEmail(true);
    }
  };
  return (
    <div className="Des">
      <h1>
        Travelling.
        <div>
          Re
          <span>imagnaied</span>
        </div>
      </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
        laborum at aspernatur, numquam fuga sint ullam debitis beatae.
      </p>
      <div className={hasEmail === true ? "input done" : "input"}>
        <input
          type="text"
          placeholder="enter your email"
          value={hasEmail === true ? "Done" : email}
          onInput={setEmailOnInput}
        />
        <div className="icon" onClick={doneAdding}>
          <i class="fas fa-arrow-right" />
        </div>
      </div>
      <div className="more">
        <div className="discover">Discover More</div>
        <i class="fas fa-angle-down" />
        <i class="fas fa-angle-down" />
      </div>
    </div>
  );
};

Description.propTypes = {};

export default Description;
