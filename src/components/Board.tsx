import useRoundStore from "@/hooks/useRoundHandler";
import useScoreHandler from "@/hooks/useScoreHandler";
import { MAX_ROUNDS, PLAYERX } from "@/services/constants";
import { SquareType } from "@/services/types";
import { WinnerModal } from "./Modal";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";
import { Square } from "./Square";

interface IProps {
  xIsNext: boolean;
  squares: SquareType[];
  onPlay: (squares: SquareType[]) => void;
  resetBoard: () => void;
}

export function Board({ xIsNext, squares, onPlay, resetBoard }: IProps) {
  const { getPreviousRound } = useRoundStore();
  const currentRound = getPreviousRound() + 1;
  const { roundWinner, squareClickHandler, ultimateWinner, setUltimateWinner } =
    useScoreHandler({ squares, xIsNext, onPlay });

  return (
    <>
      <div className="space-y-10 p-16 bg-[#EEEDEB] rounded-xl border-2 shadow-lg">
        <p className="text-lg text-center font-bold">
          Round: {currentRound} of {MAX_ROUNDS}
        </p>
        {roundWinner
          ? renderTitle(
              "Winner",
              roundWinner === PLAYERX ? <PlayerX /> : <PlayerO />
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
          aria-label={roundWinner ? "Start Next Round" : "Reset Board"}
          className="p-3 bg-secondary active:bg-[#0c4857] rounded-md text-white"
          onClick={resetBoard}
        >
          {roundWinner ? "Next Round" : "Reset"}
        </button>
      </div>
      <WinnerModal
        ultimateWinner={ultimateWinner}
        cancel={() => {
          setUltimateWinner("");
        }}
        reset={() => {
          setUltimateWinner("");
          resetBoard();
        }}
      />
    </>
  );

  function renderTitle(title: string, children: JSX.Element) {
    return (
      <div className="flex gap-3 items-center text-center">
        <p className="font-bold text-lg">{title}:</p>
        <div className="h-[40px] w-[40px]">{children}</div>
      </div>
    );
  }
}
