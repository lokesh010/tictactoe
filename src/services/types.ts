import { PLAYERO, PLAYERX } from "./constants";

export interface Round {
  round: number;
  winner: "X" | "O";
}

export type SquareType = typeof PLAYERX | typeof PLAYERO | null;
