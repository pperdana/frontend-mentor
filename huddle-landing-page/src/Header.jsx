import logo from "./images/logo.svg";
const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Huddle Logo" className="logo" />
    </header>
  );
};

export default Header;
