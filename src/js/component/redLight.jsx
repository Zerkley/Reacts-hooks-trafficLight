import React, { useState } from "react";

const RedLight = () => {
  const [glow, setGlow] = useState("null");

  const redClick = () => {
    setGlow("selected");
  };
  return (
    <button
      className={`RedLight ${glow} rounded-circle mx-4 my-2`}
      id="redLight"
      style={{ width: "5rem", height: "5rem" }}
      onClick={redClick}
    ></button>
  );
};

export default RedLight;
