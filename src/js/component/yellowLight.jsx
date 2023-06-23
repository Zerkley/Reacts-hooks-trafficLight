import React, { useState } from "react";

const YellowLight = () => {
  const [glow, setGlow] = useState("null");

  const yellowClick = () => {
    setGlow("selected");
    console.log(glow);
  };
  return (
    <button
      className={`YellowLight ${glow} rounded-circle mx-4 my-2`}
      id="yellowLight"
      style={{ width: "5rem", height: "5rem" }}
      onClick={yellowClick}
    ></button>
  );
};

export default YellowLight;
