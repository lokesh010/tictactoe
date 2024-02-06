import { storeRoundApi } from "@/api/store-round";
import { MAX_ROUNDS, PLAYERO, PLAYERX } from "@/services/constants";
import { winStrategies } from "@/services/helper";
import { useEffect, useState } from "react";
import useRoundStore from "./useRoundHandler";
import { SquareType } from "@/services/types";

interface IProps {
  squares: SquareType[];
  xIsNext: boolean;
  onPlay: (squares: SquareType[]) => void;
}

function useScoreHandler({ squares, xIsNext, onPlay }: IProps) {
  const [ultimateWinner, setUltimateWinner] = useState("");
  const roundWinner = calculateWinner(squares);

  const {
    getAllRounds,
    getUltimateWinner,
    getPreviousRound,
    setRounds,
    clearStore,
  } = useRoundStore();

  function calculateWinner(squares: any) {
    for (let i = 0; i < winStrategies.length; i++) {
      const [a, b, c] = winStrategies[i];
      const Akey = squares[a];
      const Bkey = squares[b];
      const Ckey = squares[c];

      if (Akey && Akey === Bkey && Akey === Ckey) {
        return Akey;
      }
    }
    return null;
  }

  function squareClickHandler(i: any) {
    // curring click event
    return () => {
      const filledSquare = squares[i];
      if (roundWinner || filledSquare) {
        return;
      }

      const nextSquares = [...squares];
      nextSquares[i] = xIsNext ? PLAYERX : PLAYERO;
      onPlay(nextSquares);
    };
  }

  useEffect(() => {
    if (roundWinner) {
      const previousRound = getPreviousRound();
      const currentRound = previousRound + 1;

      setRounds({ round: currentRound, winner: roundWinner });

      if (currentRound === MAX_ROUNDS) {
        storeRoundApi(getAllRounds(), getUltimateWinner()).then((_: any) =>
          clearStore()
        );
        setUltimateWinner(getUltimateWinner());
      }
    }
  }, [roundWinner]);

  return {
    ultimateWinner,
    squareClickHandler,
    roundWinner,
    setUltimateWinner,
  };
}

export default useScoreHandler;
