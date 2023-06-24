import React, { useState } from "react";

//create your first component
const Home = () => {
  //
  const [glowRed, setGlowRed] = useState("null");
  const [glowYellow, setGlowYellow] = useState("null");
  const [glowGreen, setGlowGreen] = useState("null");

  const yellowClick = () => {
    setGlowYellow("selected");
    setGlowRed("null");
    setGlowGreen("null");
  };
  const redClick = () => {
    setGlowYellow("null");
    setGlowRed("selected");
    setGlowGreen("null");
  };
  const greenClick = () => {
    setGlowYellow("null");
    setGlowRed("null");
    setGlowGreen("selected");
  };

  return (
    <div>
      <div
        className="container d-flex flex-column bg-black"
        style={{ width: "1rem", height: "15rem" }}
      ></div>
      <div
        className="container d-flex flex-column justify-content-center bg-black"
        style={{ width: "9rem", height: "20rem" }}
      >
        <button
          className={`RedLight ${glowRed} rounded-circle mx-4 my-2`}
          id="redLight"
          style={{ width: "5rem", height: "5rem" }}
          onClick={redClick}
        ></button>
        <button
          className={`YellowLight ${glowYellow} rounded-circle mx-4 my-2`}
          id="yellowLight"
          style={{ width: "5rem", height: "5rem" }}
          onClick={yellowClick}
        ></button>
        <button
          className={`GreenLight ${glowGreen} rounded-circle mx-4 my-2`}
          id="greenLight"
          style={{ width: "5rem", height: "5rem" }}
          onClick={greenClick}
        ></button>
      </div>
    </div>
  );
};

export default Home;
