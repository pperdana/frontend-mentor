import logo from "./assets/images/logo.svg";

const Hero = () => {
  return (
    <div className="flex justify-center bg-hero-pattern bg-no-repeat	bg-cover bg-center">
      <div className="wrapper  w-full py-0 px-[30px] max-w-[1200px]">
        <div className="hero flex flex-col	justify-between	items-start">
          <header className="hero__header mt-[50px] flex justify-between w-full">
            <img src={logo} alt="loopstudios" className="logo z-[2]" />
            <nav className="h-[45px] flex justify-center	items-center gap-[30px]">
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
