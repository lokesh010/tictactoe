import { INIT_SQUARES } from "@/services/constants";
import { SquareType } from "@/services/types";
import dynamic from "next/dynamic";
import { useState } from "react";
const Board = dynamic(() => import("@/components/Board"), {
  ssr: false,
});

export default function Home() {
  const [currentMove, setCurrentMove] = useState<number>(0);
  const xIsNext = currentMove % 2 === 0;
  const [squares, setSquares] = useState<SquareType[]>(INIT_SQUARES);

  function handlePlay(nextSquares: SquareType[]) {
    setSquares(nextSquares);
    setCurrentMove(currentMove + 1);
  }

  function resetBoard() {
    setCurrentMove(0);
    setSquares(INIT_SQUARES);
  }

  return (
    <main className="bg-slate-700">
      <div className="mx-auto px-4 min-h-[100vh] flex justify-center items-center">
        <Board
          xIsNext={xIsNext}
          squares={squares}
          onPlay={handlePlay}
          resetBoard={resetBoard}
        />
      </div>
    </main>
  );
}
