import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
  return (
    <header
      data-testid="header-component"
      className="flex justify-between items-center pt-[1.75rem] mb-[2rem]"
    >
      <div>
        <h1 className="font-bold text-3xl">calc</h1>
      </div>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;
