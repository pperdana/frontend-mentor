import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col justify-center items-center mt-[5rem]">
        <div className="logo flex gap-[1rem]">
          <div className="fb icon-container">
            <FaFacebookF className="icon" />
          </div>
          <div className="tw icon-container">
            <FaTwitter className="icon" />
          </div>
          <div className="ig icon-container">
            <FaInstagram className="icon" />
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
