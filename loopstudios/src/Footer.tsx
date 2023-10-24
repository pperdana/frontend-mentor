const Footer = () => {
  return (
    <div className="page _footer">
      <div className="wrapper">
        <footer>
          <header className="hero__header _footer-header">
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
          </header>
          <div className="copyright-col">
            <div className="socials">
              <div className="social__img _facebook"></div>
              <div className="social__img _twitter"></div>
              <div className="social__img _Pinterest"></div>
              <div className="social__img _instagram"></div>
            </div>
            <p className="copyright">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
