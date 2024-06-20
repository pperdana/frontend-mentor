import styled from "styled-components";
import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <Wrapper id="header" className="header">
      <nav>
        <div id="logo">
          <img src={logo} alt="logo" />
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
          />
        </div>
      </nav>
      <div id="hero-section">
        <h1>
          <span>A</span> modern publishing platform
        </h1>
        <div className="hero-para">
          <p>Grow your audience and build your online brand</p>
        </div>
        <div className="btns">
          <button className="btn">Start for Free</button>
          <button className="learn-more">Learn More</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 11dvh 10dvw;
  border-radius: 0 0 0 7.2rem;
  background-repeat: no-repeat;
  color: var(--clr-white);

  background: url(./src/assets/bg-pattern-intro-desktop.svg),
    linear-gradient(
      to left,
      var(--clr-gradient-light-red),
      var(--clr-gradient-very-light-red)
    );
  background-position: 23% 53%;

  nav {
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 12.5dvh;
    justify-content: space-between;
  }

  #hero-section {
    display: flex;
    align-items: center;
    margin-bottom: 4.5rem;
    flex-direction: column;
  }
  #logo {
    margin-right: 5vw;
  }

  .links-reg {
    display: flex !important;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }

  .mobile,
  .menuBtn {
    display: none;
  }

  #navLinks {
    position: relative;
  }

  #register {
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2.4rem;
  }

  ul {
    display: flex;
    column-gap: 1.8rem;
    list-style-type: none;
  }

  a,
  li a {
    color: var(--clr-white);
  }

  .link,
  #login a {
    font-size: 14px;
    font-weight: 500;
  }

  #navLinks ul .link a {
    display: flex;
    align-items: center;
  }

  .menu .link a {
    font-size: 15px;
    color: hsl(207, 13%, 34%);
  }

  a,
  a:active,
  a:visited {
    color: var(--clr-neutral-white);
    text-decoration: none;
  }

  .menu {
    top: 4.16rem;
    left: -3.2rem;
    width: 12.8rem;
    display: none;
    padding: 30px 20px;
    border-radius: 4px;
    position: absolute;
    background-color: var(--clr-white);
  }

  #navLinks ul .link a .img {
    width: 10px;
    height: 10px;
    margin-left: 10px;
    background-repeat: no-repeat;
    background-position: center right;
    background-image: url(./src/assets/icon-arrow-light.svg);
  }
  #navLinks .link a > .img {
    transition: transform 0.5s ease;
  }

  h1 {
    text-align: center;
    color: var(--clr-white);
    font-size: max(4.4vw, 2rem);
    text-transform: lowercase;
    span {
      text-transform: uppercase;
    }
  }

  .hero-para {
    font-weight: 300;
    text-align: center;
    color: var(--clr-white);
    margin-block: 0.5rem 2.8rem;
    font-family: var(--Overpass);
    font-size: max(1.6dvw, 1.1rem);
  }

  button {
    border: none;
    font-weight: 700;
    padding: 10px 20px;
    border-radius: 40px;
    cursor: pointer;
  }

  .btn,
  .learn-more:hover {
    color: hsl(353, 100%, 62%);
    background-color: var(--clr-neutral-white);
  }

  .btn:hover {
    color: var(--clr-neutral-white);
    background-color: var(--clr-primary-very-light-red);
  }

  .learn-more {
    margin-left: 0.7rem;
    color: var(--clr-white);
    background-color: transparent;
    border: 1px solid var(--clr-white);
  }
`;
