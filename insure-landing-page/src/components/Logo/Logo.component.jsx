import "./Logo.styles.scss";

import logo from "../../assets/images/logo.svg";

const Logo = () => {
  return (
    <a href="#">
      <img className="logo" alt="logo" src={logo} />
    </a>
  );
};

export default Logo;
