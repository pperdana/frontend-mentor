import "./Footer.styles.scss";

import logo from "../../images/logo.svg";
import facebook from "../../images/icon-facebook.svg";
import instagram from "../../images/icon-instagram.svg";
import twitter from "../../images/icon-twitter.svg";
import pinterest from "../../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container footer-container">
        <div class="logo-col">
          <a href="#" class="footer-logo">
            {/* <img class="logo" alt="logo" src={logo} /> */}
            sunnyside
          </a>
        </div>

        <nav class="nav-col">
          <ul class="footer-nav">
            <li>
              <a class="footer-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a class="footer-link" href="#services">
                Services
              </a>
            </li>
            <li>
              <a class="footer-link" href="#projects">
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <nav class="nav-col">
          <ul class="social-links">
            <li>
              <a class="footer-link" target="blank" href="#">
                <img src={facebook} className="social-icon" alt="facebook" />
              </a>
            </li>

            <li>
              <a class="footer-link" target="blank" href="#">
                <img src={instagram} className="social-icon" alt="instagram" />
              </a>
            </li>

            <li>
              <a class="footer-link" target="blank" href="#">
                <img src={twitter} className="social-icon" alt="twitter" />
              </a>
            </li>

            <li>
              <a class="footer-link" target="blank" href="#">
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
