import logo from "./assets/images/logo.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="page _footer bg-[hsl(0,0%,0%)]">
      <div className="wrapper">
        <footer className="flex mt-[calc((1vh+1vw)*1.8)] mb-[calc((1vh+1vw)*1)] md:flex-col md:justify-between	md:items-center">
          <header className="hero__header _footer-header flex-col	items-start	mt-0 flex justify-between	w-full md:flex-col md:items-center md:mt-0">
            <img
              src={logo}
              alt="loopstuios"
              className="logo w-[calc((1vh+1vw)*6.4)] z-[2] max-w-full block md:w-[calc((1vh+1vw)*12)]"
            />
            <nav className="h-[40px] flex justify-center items-center	gap-[25px] md:mt-[calc((1vh+1vw)*1.8)] md:h-auto md:flex md:flex-col	md:items-center	md:gap-[30px]">
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
          <div className="copyright-col w-[50%] flex flex-col	items-end	justify-between md:items-center	md:mt-[calc((1vh+1vw)*1.8)] md:justify-center	md:w-full">
            <div className="socials flex md:mt-[calc((1vh+1vw)*2.2)] md:gap-[calc((1vh+1vw)*1.5)]">
              <div className="social__img _facebook bg-facebook"></div>
              <div className="social__img _twitter bg-twitter"></div>
              <div className="social__img _Pinterest bg-pinterest"></div>
              <div className="social__img _instagram bg-instagram"></div>
            </div>
            <p className="copyright text-[hsl(0,0%,75%)] font-alata text-[calc((1vh+1vw)*0.67)] md:mt-[calc((1vh+1vw)*1.8)] md:mb-[calc((1vh+1vw)*1.8)] md:text-[calc((1vh+1vw)*1.2)]">
              {`© ${year} Loopstudios. All rights reserved.`}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
