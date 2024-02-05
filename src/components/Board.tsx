import { ReactElement } from "react";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";
import { Square } from "./Square";
import { winStrategies } from "@/services/helper";

export function Board({ xIsNext, squares, onPlay }: any) {
  const winner = calculateWinner(squares);

  function calculateWinner(squares: any) {
    const getText = (el: any) => el?.type()?.key;

    for (let i = 0; i < winStrategies.length; i++) {
      const [a, b, c] = winStrategies[i];
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
    return () => {
      if (winner || squares[i]) return;

      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = <PlayerX animate />;
      } else {
        nextSquares[i] = <PlayerO animate />;
      }
      onPlay(nextSquares);
    };
  }

  return (
    <div className="space-y-10 p-10 bg-[#EEEDEB] rounded-xl border-2 shadow-lg">
      {winner
        ? renderTitle("Winner", winner === "X" ? <PlayerX /> : <PlayerO />)
        : renderTitle("Next Turn", xIsNext ? <PlayerX /> : <PlayerO />)}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <Square value={squares[0]} onSquareClick={handleClick(0)} />
          <Square value={squares[1]} onSquareClick={handleClick(1)} />
          <Square value={squares[2]} onSquareClick={handleClick(2)} />
        </div>
        <div className="flex gap-3">
          <Square value={squares[3]} onSquareClick={handleClick(3)} />
          <Square value={squares[4]} onSquareClick={handleClick(4)} />
          <Square value={squares[5]} onSquareClick={handleClick(5)} />
        </div>
        <div className="flex gap-3">
          <Square value={squares[6]} onSquareClick={handleClick(6)} />
          <Square value={squares[7]} onSquareClick={handleClick(7)} />
          <Square value={squares[8]} onSquareClick={handleClick(8)} />
        </div>
      </div>
    </div>
  );

  function renderTitle(title: string, children: ReactElement) {
    return (
      <div className="flex gap-3 items-center">
        <p className="font-bold text-lg">{title}:</p>
        <div className="h-[40px] w-[40px]">{children}</div>
      </div>
    );
  }
}
