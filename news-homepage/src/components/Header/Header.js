import "./Header.styles.css";

import logo from "../../images/logo.svg";
import iconMenu from "../../images/icon-menu.svg";
import iconMenuClose from "../../images/icon-menu-close.svg";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const toogleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className={`${isNavOpen ? "header nav-open" : "header"}`}>
      <a href="/">
        <img src={logo} alt="logo" className="logo" />
      </a>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#new">
              New
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#popular">
              Popular
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#trending">
              Trending
            </a>
          </li>
          <li>
            <a className="main-nav-link nav-cta" href="#categories">
              Categories
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav" onClick={toogleNav}>
        <img
          className="icon-mobile-nav icon-menu"
          src={iconMenu}
          alt="icon menu"
        />
        <img
          className="icon-mobile-nav icon-close"
          src={iconMenuClose}
          alt="icon menu"
        />
      </button>
    </header>
  );
};

export default Header;
