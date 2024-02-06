import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
  test("renders button with correct text", () => {
    render(<Button label="Click me" />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });
});
