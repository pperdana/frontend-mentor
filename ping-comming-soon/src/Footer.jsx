import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center">
        <div className="logo flex gap-[1rem]">
          <div className="fb icon">
            <FaFacebookF />
          </div>
          <div className="tw icon">
            <FaTwitter />
          </div>
          <div className="ig icon">
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
