import React from "react";
import RedLight from "./redLight";
import YellowLight from "./yellowLight";
import GreenLight from "./greenLight";

//create your first component
const Home = () => {
  //

  return (
    <div>
      <div
        className="container d-flex flex-column bg-black"
        style={{ width: "1rem", height: "15rem" }}
      >
        iii
      </div>
      <div
        className="container d-flex flex-column justify-content-center bg-black"
        style={{ width: "9rem", height: "20rem" }}
      >
        <RedLight />
        <YellowLight />
        <GreenLight />
      </div>
    </div>
  );
};

export default Home;
