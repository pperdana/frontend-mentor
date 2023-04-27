import "./Header.styles.scss";

import Logo from "../Logo/Logo.component";
import Navigation from "../Navigation/Navigation.component";

const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
