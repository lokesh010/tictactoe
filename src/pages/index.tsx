import { useState } from "react";
import dynamic from "next/dynamic";
const Board = dynamic(
  () => import("@/components/Board").then((mod) => mod.Board),
  {
    ssr: false,
  }
);

const initialHistory = [Array(9).fill(null)];

export default function Home() {
  const [history, setHistory] = useState(initialHistory);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0; // even number is X's turn
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetBoard() {
    setCurrentMove(0);
    setHistory(initialHistory);
  }

  return (
    <main>
      <div className="h-[90vh] flex justify-center items-center">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
            resetBoard={resetBoard}
          />
        </div>
      </div>
    </main>
  );
}
