import "./Navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#">
              How we work
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
              Account
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#">
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
