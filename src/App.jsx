import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [bgColor, setBgColor] = useState("white");
  const [wColor, setWColor] = useState("#1b1b1b");
  const [btnColor, setBtnColor] = useState("white");

  function handleClick() {
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white");
    setWColor(wColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setBtnColor(bgColor === "white" ? "#1b1b1b" : "white");
  }
  return (
    <section style={{ backgroundColor: bgColor, color: wColor }}>
      <button
        onClick={handleClick}
        style={{
          backgroundColor: btnColor,
          color: wColor,
          border: `2px solid ${wColor}`,
        }}
      >
        {bgColor === "#1b1b1b" ? "Black Theme" : "White Theme"}
      </button>
      <section className="content">
        <h1>
          Welcome To A <br />
          Real World...
        </h1>
      </section>
    </section>
  );
};

export default App;
