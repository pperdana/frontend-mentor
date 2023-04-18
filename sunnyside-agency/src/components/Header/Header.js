import "./Header.styles.scss";

import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
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
