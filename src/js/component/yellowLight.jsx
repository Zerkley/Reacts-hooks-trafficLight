import React from "react";

const YellowLight = () => {
  let glow = null;

  const yellowClick = () => {
    glow = "selected";
  };
  return (
    <button
      className="YellowLight rounded-circle mx-4 my-2"
      id="yellowLight"
      style={{ width: "5rem", height: "5rem" }}
      onClick={yellowClick}
    ></button>
  );
};

export default YellowLight;
