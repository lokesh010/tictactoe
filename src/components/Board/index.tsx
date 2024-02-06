import useRoundHandler from "@/hooks/useRoundHandler";
import useScoreHandler from "@/hooks/useScoreHandler";
import { MAX_ROUNDS, PLAYERX } from "@/services/constants";
import { SquareType } from "@/services/types";
import dynamic from "next/dynamic";

const WinnerModal = dynamic(() => import("@/components/Modal"), {
  ssr: false,
});

const PlayerX = dynamic(() => import("@/components/PlayerX"), {
  ssr: false,
});

const PlayerO = dynamic(() => import("@/components/PlayerO"), {
  ssr: false,
});

const Square = dynamic(() => import("@/components/Square"), {
  ssr: false,
});

interface IProps {
  key?: boolean;
  xIsNext: boolean;
  squares: SquareType[];
  onPlay: (squares: SquareType[]) => void;
  resetBoard: () => void;
}

function Board({ xIsNext, squares, onPlay, resetBoard }: IProps) {
  const { getPreviousRound } = useRoundHandler();
  const currentRound = getPreviousRound() + 1;
  const { roundWinner, squareClickHandler, ultimateWinner, setUltimateWinner } =
    useScoreHandler({ squares, xIsNext, onPlay });

  return (
    <>
      <div className="animate-slideDown space-y-10 p-16 bg-[#EEEDEB] rounded-xl border-2 shadow-lg">
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
          <div className="grid grid-cols-3 gap-3">
            {Array(9)
              .fill(null)
              .map((_, i) => (
                <Square
                  key={i}
                  position={i}
                  value={squares[i]}
                  onSquareClick={squareClickHandler(i)}
                />
              ))}
          </div>
        </div>
        <button
          data-testid="reset-btn"
          aria-label={roundWinner ? "Start Next Round" : "Reset Board"}
          className="p-3 bg-secondary active:bg-[#0c4857] rounded-md text-white"
          onClick={resetBoard}
        >
          {roundWinner ? "Next Round" : "Reset"}
        </button>
      </div>
      {/* to lazy load only after we get ultimate winner */}
      {ultimateWinner ? (
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
      ) : null}
    </>
  );

  function renderTitle(title: string, children: JSX.Element) {
    return (
      <div className="flex gap-3 items-center text-center">
        <p className="font-bold text-lg">{title}:</p>
        <div className="h-[40px] w-[40px] animate-pulse">{children}</div>
      </div>
    );
  }
}

export default Board;
