import { ReactElement } from "react";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";
import { Square } from "./Square";

export function Board({ xIsNext, squares, onPlay }: any) {
  function calculateWinner(squares: any) {
    const getText = (el: any) => el?.type()?.key;

    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      const Akey = getText(squares[a]);
      const Bkey = getText(squares[b]);
      const Ckey = getText(squares[c]);

      if (Akey && Akey === Bkey && Akey === Ckey) {
        return Akey;
      }
    }
    return null;
  }

  function handleClick(i: any) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = <PlayerX />;
    } else {
      nextSquares[i] = <PlayerO />;
    }
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Turn: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-5">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="flex gap-5">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="flex gap-5">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
