import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#about">
              How we work
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#services">
              Blog
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#projects">
              Account
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#contact">
              View plans
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
