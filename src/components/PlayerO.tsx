import React from "react";

function PlayerO({ animate = false }) {
  return (
    <svg
      className={animate ? "animate-drawO" : ""}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="title-desc">Player O Icon</title>
      <desc>Player O icon representing O in the tic-tac-toe game.</desc>
      <circle
        className="stroke-secondary"
        cx="50%"
        cy="50%"
        r="45%"
        strokeWidth="5"
        fill="transparent"
      />
    </svg>
  );
}

export default PlayerO;
