import { ReactElement, useEffect, useState } from "react";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";
import { Square } from "./Square";
import { winStrategies } from "@/services/helper";
import useRoundStore from "@/hooks/useRoundHandler";
import { WinnerModal } from "./Modal";
import { MAX_ROUNDS } from "@/services/constants";
import { storeRound } from "@/api/store-round";

export function Board({ xIsNext, squares, onPlay, resetBoard }: any) {
  const [ultimateWinner, setUltimateWinner] = useState("");
  const { getAllRounds, getUltimateWinner, getCurrentRound, setRounds } =
    useRoundStore();
  const roundWinner = calculateWinner(squares);

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
    const filledSquare = squares[i];
    return () => {
      if (roundWinner || filledSquare) {
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
    if (roundWinner) {
      setRounds({ round: getCurrentRound() + 1, winner: roundWinner });

      if (getCurrentRound() === MAX_ROUNDS) {
        storeRound(getAllRounds(), getUltimateWinner());
        setUltimateWinner(getUltimateWinner());
      }
    }
  }, [roundWinner]);

  return (
    <>
      <div className="space-y-10 p-16 bg-[#EEEDEB] rounded-xl border-2 shadow-lg">
        <p className="text-lg text-center font-bold">
          Round: {getCurrentRound() + 1} of {MAX_ROUNDS}
        </p>
        {roundWinner
          ? renderTitle(
              "Winner",
              roundWinner === "X" ? <PlayerX /> : <PlayerO />
            )
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
        <button
          className="p-3 bg-[#0C2D57] active:bg-[#0c4857] rounded-md text-white"
          onClick={resetBoard}
        >
          {roundWinner ? "Next Round" : "Reset"}
        </button>
      </div>
      <WinnerModal ultimateWinner={ultimateWinner} close={() => {}} />
    </>
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
