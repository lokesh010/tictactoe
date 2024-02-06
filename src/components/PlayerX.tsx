import React from "react";

function PlayerX({ animate = false }) {
  return (
    <svg
      className={animate ? "animate-drawX" : ""}
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="title-desc">Player X Icon</title>
      <desc>Player X icon representing X in the tic-tac-toe game.</desc>
      <line
        className="stroke-primary"
        x1="5%"
        y1="5%"
        x2="90%"
        y2="90%"
        strokeWidth="5"
      />
      <line
        className="stroke-primary"
        x1="5%"
        y1="90%"
        x2="90%"
        y2="5%"
        strokeWidth="5"
      />
    </svg>
  );
}

export default PlayerX;
