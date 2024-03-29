import { Round } from "@/services/types";
import axios from "axios";

export const storeRoundApi = (rounds: Array<Round>, winner: string) =>
  axios.post("/api/store", { rounds, winner });
