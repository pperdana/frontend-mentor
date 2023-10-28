import logo from "./assets/images/logo.svg";

const Footer = () => {
  return (
    <div className="page _footer bg-[hsl(0,0%,0%)]">
      <div className="wrapper">
        <footer className="flex mt-[calc((1vh+1vw)*1.8)] mb-[calc((1vh+1vw)*1)]">
          <header className="hero__header _footer-header flex-col	items-start	mt-0 flex justify-between	w-full">
            <img
              src={logo}
              alt="loopstuios"
              className="logo w-[calc((1vh+1vw)*6.4)] z-[2] max-w-full block"
            />
            <nav className="h-[45px] flex justify-center items-center	gap-[30px]">
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
          <div className="copyright-col w-[50%] flex flex-col	items-end	justify-between">
            <div className="socials flex">
              <div className="social__img _facebook bg-facebook"></div>
              <div className="social__img _twitter bg-twitter"></div>
              <div className="social__img _Pinterest bg-pinterest"></div>
              <div className="social__img _instagram bg-instagram"></div>
            </div>
            <p className="copyright text-[hsl(0,0%,75%)] font-['Alata'] font-[calc((1vh+1vw)*0.67)]">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
