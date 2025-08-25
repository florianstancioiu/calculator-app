import { render, screen, fireEvent } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";

describe("<ThemeSwitcher> component", () => {
  test("renders the component", () => {
    render(<ThemeSwitcher />);

    const themeElement = screen.getByText(/theme/i);
    expect(themeElement).toBeInTheDocument();
  });

  /*
  test("clicking on the switcher switches position", () => {
    render(<ThemeSwitcher />);

    const titleText = screen.getByTestId("theme-switcher-title");

    fireEvent.click(titleText);

    //expect(+displayText.innerHTML).toEqual(4);
  });
  */
});
