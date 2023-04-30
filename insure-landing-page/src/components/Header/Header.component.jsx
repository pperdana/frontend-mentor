import "./Header.styles.scss";

import Logo from "../Logo/Logo.component";
import Navigation from "../Navigation/Navigation.component";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toogleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`${isNavOpen ? "header nav-open" : "header"}`}>
      <Logo />
      <Navigation toogleNav={toogleNav} />
    </header>
  );
};

export default Header;
