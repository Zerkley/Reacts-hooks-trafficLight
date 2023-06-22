import React, { useState } from "react";

const GreenLight = () => {
  // let glow = null;
  const [glow, setGlow] = useState("null");

  const greenClick = () => {
    setGlow("selected");
    console.log(glow);
  };

  return (
    <button
      className="GreenLight glow rounded-circle mx-4 my-2"
      id="greenLight"
      style={{ width: "5rem", height: "5rem" }}
      onClick={greenClick}
    ></button>
  );
};

export default GreenLight;
