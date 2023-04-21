import "./Footer.styles.scss";

import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="logo-col">
          <a href="#" className="footer-logo">
            sunnyside
          </a>
        </div>

        <nav className="nav-col">
          <ul className="footer-nav">
            <li>
              <a className="footer-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="footer-link" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="footer-link" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <nav className="nav-col">
          <ul className="social-links">
            <li>
              <a className="footer-link" target="blank" href="#">
                <img src={facebook} className="social-icon" alt="facebook" />
              </a>
            </li>

            <li>
              <a className="footer-link" target="blank" href="#">
                <img src={instagram} className="social-icon" alt="instagram" />
              </a>
            </li>

            <li>
              <a className="footer-link" target="blank" href="#">
                <img src={twitter} className="social-icon" alt="twitter" />
              </a>
            </li>

            <li>
              <a className="footer-link" target="blank" href="#">
                <img src={pinterest} className="social-icon" alt="pinterest" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
