import logo from "./images/logo.svg";
const Header = () => {
  return (
    <header className="h-[7.6rem] px-[7rem] flex align-items-center py-0 xl:px-[5.2rem] sm:py-0 sm:px-[3.5rem]">
      <img src={logo} alt="Huddle Logo" className="w-[11.5rem]" />
    </header>
  );
};

export default Header;
