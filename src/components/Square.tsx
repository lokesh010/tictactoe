export function Square({ value, onSquareClick }: any) {
  return (
    <div
      className="p-1 border-[#944E63] border-2 w-[60px] h-[60px] hover:bg-gray-300 rounded-lg cursor-pointer"
      onClick={onSquareClick}
    >
      {value}
    </div>
  );
}
