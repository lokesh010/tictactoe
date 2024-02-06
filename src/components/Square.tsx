import { PLAYERX } from "@/services/constants";
import { SquareType } from "@/services/types";
import PlayerO from "./PlayerO";
import PlayerX from "./PlayerX";

interface IProps {
  position: number;
  value: SquareType;
  onSquareClick: () => void;
}

function Square({ position, value, onSquareClick }: IProps) {
  return (
    <div
      data-testid={"square" + (value || position)}
      className="p-1 border-[#944E63] border-2 w-[60px] h-[60px] hover:bg-gray-300 rounded-lg cursor-pointer"
      onClick={onSquareClick}
    >
      {!value ? null : value === PLAYERX ? (
        <PlayerX animate />
      ) : (
        <PlayerO animate />
      )}
    </div>
  );
}
export default Square;
