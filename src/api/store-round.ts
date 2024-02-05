import { Round } from "@/services/types";
import axios from "axios";

export const storeRound = (rounds: Array<Round>, winner: string) =>
  axios.post("/api/store", { rounds, winner });
