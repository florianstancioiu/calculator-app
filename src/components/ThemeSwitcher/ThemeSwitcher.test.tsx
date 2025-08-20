import { render, screen } from "@testing-library/react";
import ThemeSwitcher from "./ThemeSwitcher";

describe("<ThemeSwitcher> component", () => {
  test("renders the component", () => {
    render(<ThemeSwitcher />);

    const themeElement = screen.getByText(/theme/i);
    expect(themeElement).toBeInTheDocument();
  });
});
