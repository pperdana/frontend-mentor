import "./Footer.styles.scss";

import logoIcon from "../../assets/images/logo.svg";

import facebookIcon from "../../assets/images/icon-facebook.svg";
import twitterIcon from "../../assets/images/icon-twitter.svg";
import pinterestIcon from "../../assets/images/icon-pinterest.svg";
import instagramIcon from "../../assets/images/icon-instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <div className="logo-col">
            <a href="#" className="footer-logo">
              <img className="logo" alt="Insure logo" src={logoIcon} />
            </a>

            <ul className="social-links">
              <li>
                <a className="footer-link" href="#">
                  <img src={facebookIcon} alt="facebook icon" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <img src={twitterIcon} alt="facebook icon" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <img src={pinterestIcon} alt="facebook icon" />
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  <img src={instagramIcon} alt="facebook icon" />
                </a>
              </li>
            </ul>
          </div>
          <hr className="divider" />
        </div>

        <div className="nav-container">
          <nav className="nav-col">
            <p className="footer-heading">Our company</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  How we work
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Why Insure?
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  View plans
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Reviews
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Help me</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Terms of use
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Cookies
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Contact</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Sales
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Support
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Live chat
                </a>
              </li>
            </ul>
          </nav>

          <nav className="nav-col">
            <p className="footer-heading">Others</p>
            <ul className="footer-nav">
              <li>
                <a className="footer-link" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Press
                </a>
              </li>
              <li>
                <a className="footer-link" href="#">
                  Licenses
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
