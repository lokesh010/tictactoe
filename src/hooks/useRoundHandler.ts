import { STORE_KEY } from "@/services/constants";
import { Round } from "@/services/types";

function useRoundHandler() {
  function getAllRounds() {
    const rounds: Round[] = JSON.parse(localStorage.getItem(STORE_KEY) || "[]");
    return rounds;
  }

  function clearStore() {
    localStorage.removeItem(STORE_KEY);
  }

  function getUltimateWinner() {
    const totalRounds = getAllRounds();
    const score = totalRounds.reduce((acc: any, round: Round) => {
      const winner = round.winner;
      acc[winner] = (acc[winner] || 0) + 1;
      return acc;
    }, {});

    const ultimateWinner = Object.keys(score).reduce((prev, current) =>
      score[current] > score[prev] ? current : prev
    );

    return ultimateWinner;
  }

  function getPreviousRound() {
    const localRounds: Round[] = JSON.parse(
      localStorage.getItem(STORE_KEY) || "[]"
    );

    return localRounds.length ? localRounds[localRounds.length - 1].round : 0;
  }

  function setRounds(round: Round) {
    const localRounds: Round[] = getAllRounds();
    const newRounds = [...localRounds, round];
    localStorage.setItem(STORE_KEY, JSON.stringify(newRounds));
  }

  return {
    getAllRounds,
    getUltimateWinner,
    clearStore,
    getPreviousRound,
    setRounds,
  };
}

export default useRoundHandler;
