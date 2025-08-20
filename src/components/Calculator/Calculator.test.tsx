import { render, screen } from "@testing-library/react";
import Calculator from "./Calculator";

describe("<Calculator> component", () => {
  test("renders the component", () => {
    render(<Calculator />);
    /*

    numberButtons.push(screen.getByText(/0/i));
    numberButtons.forEach((numberButton) =>
      expect(numberButton).toBeInTheDocument()
    );
    */
  });
});
