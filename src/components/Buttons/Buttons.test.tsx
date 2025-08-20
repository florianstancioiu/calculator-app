import { render, screen } from "@testing-library/react";
import Buttons from "./Buttons";
import { buttons } from "../Calculator/CalculatorButtonValues";

describe("<Buttons> component", () => {
  test("renders the component", () => {
    render(<Buttons values={buttons} />);

    const numberButtons = [];
    numberButtons.push(screen.getByText(/0/i));
    numberButtons.push(screen.getByText(/1/i));
    numberButtons.push(screen.getByText(/2/i));
    numberButtons.push(screen.getByText(/3/i));
    numberButtons.push(screen.getByText(/4/i));
    numberButtons.push(screen.getByText(/5/i));
    numberButtons.push(screen.getByText(/6/i));
    numberButtons.push(screen.getByText(/7/i));
    numberButtons.push(screen.getByText(/8/i));
    numberButtons.push(screen.getByText(/9/i));
    numberButtons.forEach(
      (numberButton) => expect(numberButton).toBeInTheDocument
    );

    const mathButtons = [];
    mathButtons.push(screen.getByText(/del/i));
    mathButtons.push(screen.getByText(/\+/i));
    mathButtons.push(screen.getByText(/-/i));
    mathButtons.push(screen.getByText(/x/i));
    mathButtons.push(screen.getByText(/reset/i));
    mathButtons.push(screen.getByText(/=/i));
    mathButtons.forEach(
      (numberButton) => expect(numberButton).toBeInTheDocument
    );
  });
});
