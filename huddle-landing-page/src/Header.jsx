import logo from "./images/logo.svg";
const Header = () => {
  return (
    <header className="header h-[7.6rem] px-[7rem] flex align-items-center py-0 xl:px-[5.2rem]">
      <img src={logo} alt="Huddle Logo" className="logo w-[11.5rem]" />
    </header>
  );
};

export default Header;
