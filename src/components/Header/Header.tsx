import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1>calc</h1>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
