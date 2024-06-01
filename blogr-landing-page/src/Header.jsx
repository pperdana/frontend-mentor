const Header = () => {
  return (
    <div id="header">
      <nav>
        <div id="logo">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div className="links-reg">
          <div id="navLinks">
            <ul>
              <li id="Product" className="link">
                <a href="#">
                  Product
                  <div className="img"></div>
                </a>
                <div className="menu">
                  <div className="link">
                    <a href="#">Overview</a>
                  </div>
                  <div className="link">
                    <a href="#">Pricing</a>
                  </div>
                  <div className="link">
                    <a href="#">Marketplace</a>
                  </div>
                  <div className="link">
                    <a href="#">Features</a>
                  </div>
                  <div className="link">
                    <a href="#">Integrations</a>
                  </div>
                </div>
              </li>
              <li id="Company" className="link">
                <a href="#">
                  Company
                  <div className="img"></div>
                </a>
                <div className="menu menu-2">
                  <div className="link">
                    <a href="#">About</a>
                  </div>
                  <div className="link">
                    <a href="#">Team</a>
                  </div>
                  <div className="link">
                    <a href="#">Blog</a>
                  </div>
                  <div className="link">
                    <a href="#"> Careers </a>
                  </div>
                </div>
              </li>
              <li id="Connect" className="link">
                <a href="#">
                  Connect
                  <div className="img"></div>
                </a>
                <div className="menu menu-3">
                  <div className="link">
                    <a href="#">Contact</a>
                  </div>
                  <div className="link">
                    <a href="#">Newsletter</a>
                  </div>
                  <div className="link">
                    <a href="#">Linkedin</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div id="register">
            <div id="login">
              <a href="#">Login</a>
            </div>
            <button id="signUp-btn" className="btn">
              Sign Up
            </button>
          </div>
        </div>
        <div className="menuBtn">
          <img
            className="hamburger"
            id="hamburgericon"
            src="./images/icon-hamburger.svg"
            alt="hamburger"
            onclick="openMenuOnClick()"
          />
        </div>
      </nav>
      <div id="hero-section">
        <h1>A modern publishing platform</h1>
        <div className="hero-para">
          <p>Grow your audience and build your online brand</p>
        </div>
        <div className="btns">
          <button className="btn">Start for Free</button>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
