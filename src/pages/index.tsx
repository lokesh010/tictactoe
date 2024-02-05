import { Board } from "@/components/Board";
import { useState } from "react";

export default function Home() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares: any) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  return (
    <main>
      <div className="h-[90vh] flex justify-center items-center">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
      </div>
    </main>
  );
}
