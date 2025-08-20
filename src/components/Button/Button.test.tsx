import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("<Button> component", () => {
  test("renders the component", () => {
    render(
      <Button
        title="1"
        bgColor="black"
        textColor="white"
        spansTwoColumns={false}
        isNumber={true}
      />
    );

    const buttonElement = screen.getByText(/1/i);

    expect(buttonElement).toBeInTheDocument();
  });
});
