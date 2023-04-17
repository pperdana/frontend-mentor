import "./Navigation.styles.scss";
const Navigation = () => {
  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <button className="btn-mobile-nav">
        <ion-icon
          class="icon-mobile-nav icon-menu"
          name="menu-outline"
        ></ion-icon>
        <ion-icon
          class="icon-mobile-nav icon-close"
          name="close-outline"
        ></ion-icon>
      </button>
    </>
  );
};

export default Navigation;
