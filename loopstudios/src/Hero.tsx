const Hero = () => {
  return (
    <div className="page _hero-section">
      <div className="wrapper">
        <div className="hero">
          <header className="hero__header">
            <img src="./images/logo.svg" alt="" className="logo" />
            <nav>
              <a href="#" className="nav__link">
                About
              </a>
              <a href="#" className="nav__link">
                Careers
              </a>
              <a href="#" className="nav__link">
                Events
              </a>
              <a href="#" className="nav__link">
                Products
              </a>
              <a href="#" className="nav__link">
                Support
              </a>
            </nav>
            <button className="hamburger hamburger--emphatic" type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </header>
          <div className="hero__heading">
            Immersive experiences that deliver
          </div>
        </div>
        <div className="menu closed">
          <a href="#" className="menu__link">
            About
          </a>
          <a href="#" className="menu__link">
            Careers
          </a>
          <a href="#" className="menu__link">
            Events
          </a>
          <a href="#" className="menu__link">
            Products
          </a>
          <a href="#" className="menu__link">
            Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
