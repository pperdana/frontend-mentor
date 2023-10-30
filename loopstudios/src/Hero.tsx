import logo from "./assets/images/logo.svg";

const Hero = () => {
  return (
    <div className="page bg-hero-pattern bg-no-repeat	bg-cover bg-center">
      <div className="wrapper">
        <div className="hero flex flex-col	justify-between	items-start">
          <header className="hero__header mt-[calc((1vh+1vw)*2.76)] flex justify-between w-full">
            <img src={logo} alt="loopstudios" className="logo z-[2] h-[40px]" />
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
            <button
              className="hamburger hamburger--emphatic overflow-hidden	py-[15px] px-[15px] hidden cursor-pointer	z-[3] transition-opacity	transition-[filter] duration-[150ms] ease-linear	text-inherit	normal-case	bg-transparent	border-0 m-0 overflow-visible"
              type="button"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </header>
          <div className="hero__heading text-[hsl(0,0%,100%)] font-['josefin_sans'] font-light	uppercase border-[2px]	border-solid	border-[hsl(0,0%,100%)] text-[calc((1vh+1vw)*3.2)] w-[calc((1vh+1vw)*31)] p-[30px] leading-[1.1] mt-[calc((1vh+1vw)*5.4)] mb-[calc((1vh+1vw)*6.5)] mx-0">
            Immersive experiences that deliver
          </div>
        </div>
        <div className="menu closed left-[-1000px] duration-[400ms] hidden fixed top-0 left-0 w-screen h-screen bg-[hsl(0,0%,0%)] flex-col	justify-center	overflow-hidden	">
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
