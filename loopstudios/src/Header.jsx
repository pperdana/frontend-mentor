import MobileButton from "./MobileButton";
import Navigation from "./Navigation";
import Logo from "./Logo";
import "./Header.styles.scss";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
      {/* <MobileButton /> */}
    </header>
  );
};

export default Header;
