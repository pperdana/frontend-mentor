import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="container flex flex-col justify-center items-center">
        <div className="logo flex">
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
