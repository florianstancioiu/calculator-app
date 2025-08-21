import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

describe("<Calculator> component", () => {
  test("renders the component", () => {
    render(<Calculator />);

    const headerElement = screen.getByTestId("header-component");
    const displayElement = screen.getByTestId("display-component");
    const buttonsElement = screen.getByTestId("buttons-component");

    expect(headerElement).toBeInTheDocument();
    expect(displayElement).toBeInTheDocument();
    expect(buttonsElement).toBeInTheDocument();
  });
});
