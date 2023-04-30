import "./Navigation.styles.scss";

import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import closeIcon from "../../assets/images/icon-close.svg";

const Navigation = ({ toogleNav }) => {
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

      <button className="btn-mobile-nav" onClick={toogleNav}>
        <img
          src={hamburgerIcon}
          alt="Icon hamburger"
          className="icon-mobile-nav icon-hamburger"
        />
        <img
          src={closeIcon}
          alt="Icon close"
          className="icon-mobile-nav icon-close"
        />

        {/* <ion-icon
          class="icon-mobile-nav icon-menu"
          name="menu-outline"
        ></ion-icon>
        <ion-icon
          class="icon-mobile-nav icon-close"
          name="close-outline"
        ></ion-icon> */}
      </button>
    </>
  );
};

export default Navigation;
