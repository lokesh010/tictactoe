import { ReactElement, useEffect } from "react";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";
import { Square } from "./Square";
import { winStrategies } from "@/services/helper";
import useRoundStore from "@/hooks/useRoundHandler";

export function Board({ xIsNext, squares, onPlay, resetBoard }: any) {
  const { getRounds, getCurrentRound, setRounds } = useRoundStore();

  const winner = calculateWinner(squares);

  function calculateWinner(squares: any) {
    const getKey = (el: any) => el?.type()?.key;

    for (let i = 0; i < winStrategies.length; i++) {
      const [a, b, c] = winStrategies[i];
      const Akey = getKey(squares[a]);
      const Bkey = getKey(squares[b]);
      const Ckey = getKey(squares[c]);

      if (Akey && Akey === Bkey && Akey === Ckey) {
        return Akey;
      }
    }
    return null;
  }

  function squareClickHandler(i: any) {
    const fillAllSquares = squares[i];

    return () => {
      if (winner || fillAllSquares) {
        return;
      }

      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = <PlayerX animate />;
      } else {
        nextSquares[i] = <PlayerO animate />;
      }
      onPlay(nextSquares);
    };
  }

  useEffect(() => {
    if (winner) {
      setRounds({ round: getCurrentRound() + 1, winner });
    }
  }, [winner]);

  return (
    <div className="space-y-10 p-10 bg-[#EEEDEB] rounded-xl border-2 shadow-lg">
      <p className="text-lg text-center font-bold">
        Round: {getCurrentRound()} of 5
      </p>
      {winner
        ? renderTitle("Winner", winner === "X" ? <PlayerX /> : <PlayerO />)
        : renderTitle("Next Turn", xIsNext ? <PlayerX /> : <PlayerO />)}
      <div className="flex flex-col items-center gap-3">
        <div className="flex gap-3">
          <Square value={squares[0]} onSquareClick={squareClickHandler(0)} />
          <Square value={squares[1]} onSquareClick={squareClickHandler(1)} />
          <Square value={squares[2]} onSquareClick={squareClickHandler(2)} />
        </div>
        <div className="flex gap-3">
          <Square value={squares[3]} onSquareClick={squareClickHandler(3)} />
          <Square value={squares[4]} onSquareClick={squareClickHandler(4)} />
          <Square value={squares[5]} onSquareClick={squareClickHandler(5)} />
        </div>
        <div className="flex gap-3">
          <Square value={squares[6]} onSquareClick={squareClickHandler(6)} />
          <Square value={squares[7]} onSquareClick={squareClickHandler(7)} />
          <Square value={squares[8]} onSquareClick={squareClickHandler(8)} />
        </div>
      </div>
      {winner ? (
        <button
          className="p-3 bg-blue-700 rounded-md text-white"
          onClick={resetBoard}
        >
          Next Round
        </button>
      ) : null}
    </div>
  );

  function renderTitle(title: string, children: ReactElement) {
    return (
      <div className="flex gap-3 items-center text-center">
        <p className="font-bold text-lg">{title}:</p>
        <div className="h-[40px] w-[40px]">{children}</div>
      </div>
    );
  }
}
