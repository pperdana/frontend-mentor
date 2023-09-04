import Logo from "./Logo";
const Header = () => {
  return (
    <header>
      <Logo />
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#about">
              about
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#careers">
              careers
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#events">
              events
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#products">
              products
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#support">
              support
            </a>
          </li>
        </ul>
      </nav>
      {/* <button className="btn-mobile-nav">
     <ion-icon
       className="icon-mobile-nav md hydrated"
       name="menu-outline"
       role="img"
       aria-label="menu outline"
     ></ion-icon>
     <ion-icon
       className="icon-mobile-nav md hydrated"
       name="close-outline"
       role="img"
       aria-label="close outline"
     ></ion-icon>
    </button> */}
    </header>
  );
};

export default Header;
