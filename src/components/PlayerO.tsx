import React from "react";

function PlayerO() {
  return (
    <svg
      key={"O"}
      className="animated-circle"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50%"
        cy="50%"
        r="45%"
        stroke="#0C2D57"
        strokeWidth="5"
        fill="transparent"
      />
    </svg>
  );
}

export default PlayerO;
