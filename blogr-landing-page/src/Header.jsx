const Header = () => {
  return (
    <div id="header">
      <nav>
        <div id="logo">
          <img src="./images/logo.svg" alt="logo" />
        </div>
        <div class="links-reg">
          <div id="navLinks">
            <ul>
              <li id="Product" class="link">
                <a href="#">
                  Product
                  <div class="img"></div>
                </a>
                <div class="menu">
                  <div class="link">
                    <a href="#">Overview</a>
                  </div>
                  <div class="link">
                    <a href="#">Pricing</a>
                  </div>
                  <div class="link">
                    <a href="#">Marketplace</a>
                  </div>
                  <div class="link">
                    <a href="#">Features</a>
                  </div>
                  <div class="link">
                    <a href="#">Integrations</a>
                  </div>
                </div>
              </li>
              <li id="Company" class="link">
                <a href="#">
                  Company
                  <div class="img"></div>
                </a>
                <div class="menu menu-2">
                  <div class="link">
                    <a href="#">About</a>
                  </div>
                  <div class="link">
                    <a href="#">Team</a>
                  </div>
                  <div class="link">
                    <a href="#">Blog</a>
                  </div>
                  <div class="link">
                    <a href="#"> Careers </a>
                  </div>
                </div>
              </li>
              <li id="Connect" class="link">
                <a href="#">
                  Connect
                  <div class="img"></div>
                </a>
                <div class="menu menu-3">
                  <div class="link">
                    <a href="#">Contact</a>
                  </div>
                  <div class="link">
                    <a href="#">Newsletter</a>
                  </div>
                  <div class="link">
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
            <button id="signUp-btn" class="btn">
              Sign Up
            </button>
          </div>
        </div>
        <div class="menuBtn">
          <img
            class="hamburger"
            id="hamburgericon"
            src="./images/icon-hamburger.svg"
            alt="hamburger"
            onclick="openMenuOnClick()"
          />
        </div>
      </nav>
      <div id="hero-section">
        <h1>A modern publishing platform</h1>
        <div class="hero-para">
          <p>Grow your audience and build your online brand</p>
        </div>
        <div class="btns">
          <button class="btn">Start for Free</button>
          <button class="learn-more">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
