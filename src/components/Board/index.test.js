import { MAX_ROUNDS } from "@/services/constants";
import { act, fireEvent, render, screen } from "@testing-library/react";
import Board from "../Board";

describe("Board Component", () => {
  test("renders board with correct round information", async () => {
    await act(async () => {
      const { default: Board } = await import("./index"); // wait untill Board is loaded
      render(
        <Board
          xIsNext={true}
          squares={[null, null, null, null, null, null, null, null, null]}
          onPlay={() => {}}
          resetBoard={() => {}}
        />
      );
    });

    const roundInfoElement = screen.getByText(`Round: 1 of ${MAX_ROUNDS}`);
    expect(roundInfoElement).toBeInTheDocument();
  });

  test("renders 'Reset' when no winner", async () => {
    await act(async () => {
      const { default: Board } = await import("./index"); // wait untill Board is loaded
      render(
        <Board
          xIsNext={true}
          squares={["X", "O", "X", "X", "O", "O", "O", "X", "X"]}
          onPlay={() => {}}
          resetBoard={() => {}}
        />
      );
    });

    // Check if the "Next Round" title is rendered
    const nextTurnTitle = screen.getByText("Reset");
    expect(nextTurnTitle).toBeInTheDocument();
  });

  test("renders 'Winner' when there is a winner", () => {
    render(
      <Board
        xIsNext={true}
        squares={["X", "X", "X", null, null, null, null, null, null]}
        onPlay={() => {}}
        resetBoard={() => {}}
      />
    );

    // Check if the "Winner" title is rendered
    const winnerTitle = screen.getByText("Winner:");
    expect(winnerTitle).toBeInTheDocument();
  });

  test("calls resetBoard function when reset button is clicked", () => {
    const resetBoardMock = jest.fn();
    render(
      <Board
        xIsNext={true}
        squares={["X", "O", "X", null, null, null, null, null, null]}
        onPlay={() => {}}
        resetBoard={resetBoardMock}
      />
    );

    // Click the reset button
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);

    // Check if the resetBoard function is called
    expect(resetBoardMock).toHaveBeenCalledTimes(1);
  });
});
