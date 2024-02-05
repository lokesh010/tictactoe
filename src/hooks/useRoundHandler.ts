import { storeRound } from "@/api/store-round";
import { MAX_ROUNDS, STORE_KEY } from "@/services/constants";
import { Round } from "@/services/types";
import { useState } from "react";

function useRoundStore() {
  const [storeLoading, setStoreLoading] = useState(false);

  function getWinner(rounds: Array<Round>) {
    const score = rounds.reduce((acc: any, round: Round) => {
      const winner = round.winner;
      acc[winner] = (acc[winner] || 0) + 1;
      return acc;
    }, {});

    const ultimateWinner = Object.keys(score).reduce((prev, current) =>
      score[current] > score[prev] ? current : prev
    );

    return ultimateWinner;
  }

  function clearStore() {
    localStorage.removeItem(STORE_KEY);
  }

  function getCurrentRound() {
    const localItem: Array<Round> | null = JSON.parse(
      localStorage.getItem(STORE_KEY) as string
    );

    if (localItem) {
      return localItem[localItem.length - 1].round;
    }

    return 0;
  }

  function setRounds(round: Round) {
    const prevRounds = JSON.parse(localStorage.getItem(STORE_KEY) as string);
    const newRound = prevRounds
      ? JSON.stringify([...prevRounds, round])
      : JSON.stringify([round]);

    if (round.round === MAX_ROUNDS) {
      storeReq(newRound);
    } else {
      localStorage.setItem(STORE_KEY, newRound);
    }
  }

  function storeReq(rounds: string) {
    setStoreLoading(true);
    storeRound(JSON.parse(rounds), getWinner(JSON.parse(rounds))).finally(() =>
      setStoreLoading(false)
    );
  }

  return {
    clearStore,
    storeLoading,
    getCurrentRound,
    setRounds,
  };
}

export default useRoundStore;
