import React from "react";

function PlayerX() {
  return (
    <svg
      key={"X"}
      className="animated-svg"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="5%"
        y1="5%"
        x2="90%"
        y2="90%"
        stroke="#FC6736"
        strokeWidth="5"
      />
      <line
        x1="5%"
        y1="90%"
        x2="90%"
        y2="5%"
        stroke="#FC6736"
        strokeWidth="5"
      />
    </svg>
  );
}

export default PlayerX;
