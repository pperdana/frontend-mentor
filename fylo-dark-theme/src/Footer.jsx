import logo from "./assets/logo.svg";
import locationIcon from "./assets/icon-location.svg";
import phoneIcon from "./assets/icon-phone.svg";
import emailIcon from "./assets/icon-email.svg";

import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="sign-up">
        <h5>Get early access today</h5>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div>
          <input type="email" id="emailInput" placeholder="email@example.com" />
          <button className="cta-2" onclick="validateEmail()">
            Get Started For Free
          </button>
          <div id="errorMessage" className="error-message">
            Please enter a valid email address
          </div>
        </div>
      </div>

      <img className="logo" src={logo} alt="logo" />
      <main>
        <div className="location">
          <img src={locationIcon} alt="icon-location" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="address">
          <div>
            <img src={phoneIcon} alt="icon-phone" />
            <p>+1-543-123-4567</p>
          </div>
          <div>
            <img src={emailIcon} alt="icon-email" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <div className="questions">
          <div>
            <a href="#">About Us</a>
            <a href="#">Jobs</a>
            <a href="#">Press</a>
            <a href="#">Blog</a>
          </div>
          <div>
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
          </div>
        </div>
        <div className="icons">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
        </div>
      </main>
    </footer>
  );
};

export default Footer;
