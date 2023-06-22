import React from "react";

const RedLight = () => {
  let glow = null;

  const redClick = () => {
    glow = "selected";
  };
  return (
    <button
      className="RedLight rounded-circle mx-4 my-2"
      id="redLight"
      style={{ width: "5rem", height: "5rem" }}
      onClick={redClick}
    ></button>
  );
};

export default RedLight;
