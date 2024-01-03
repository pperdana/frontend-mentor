import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="logo">
          <div className="fb">
            <FaFacebookF />
          </div>
          <div className="tw">
            <FaTwitter />
          </div>
          <div className="ig">
            <FaInstagram />
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright Ping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
