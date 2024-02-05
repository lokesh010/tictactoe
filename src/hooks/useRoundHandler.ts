"use client";
const storeKey = "rounds";

interface Round {
  round: number;
  winner: "X" | "O";
}

function useRoundStore() {
  const getRounds = () => localStorage.getItem(storeKey) || null;

  function setRounds(round: Round) {
    const prevRounds = JSON.parse(localStorage.getItem(storeKey) as string);

    localStorage.setItem(
      storeKey,
      prevRounds
        ? JSON.stringify([...prevRounds, round])
        : JSON.stringify([round])
    );
  }

  function getCurrentRound() {
    const localItem: Array<Round> | null = JSON.parse(
      localStorage.getItem(storeKey) as string
    );

    if (localItem) {
      return localItem[localItem.length - 1].round;
    }

    return 1;
  }

  return {
    getRounds,
    setRounds,
    getCurrentRound,
  };
}

export default useRoundStore;
