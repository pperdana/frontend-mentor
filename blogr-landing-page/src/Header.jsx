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
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  padding: 11dvh 10dvw;
  border-radius: 0 0 0 7.2rem;
  background-repeat: no-repeat;

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
  }
  ul {
    display: flex;
    column-gap: 1.8rem;
    list-style-type: none;
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
  .menu {
    top: 2.6rem;
    left: -1rem;
    width: 8.7rem;
    display: none;
    padding: 30px 20px;
    border-radius: 4px;
    position: absolute;
    background-color: var(--White);
  }
  #navLinks ul .link a .img {
    width: 10px;
    height: 10px;
    margin-left: 10px;
    background-repeat: no-repeat;
    background-position: center right;
    background-image: url(./images/icon-arrow-light.svg);
  }
  #navLinks .link a > .img {
    transition: transform 0.5s ease;
  }

  h1 {
    text-align: center;
    color: var(--White);
    font-size: max(4.4vw, 2rem);
    font-family: var(--Overpass);
  }

  .hero-para {
    font-weight: 300;
    text-align: center;
    color: var(--White);
    margin-block: 0.5rem 2.8rem;
    font-family: var(--Overpass);
    font-size: max(1.6dvw, 1.1rem);
  }

  .btn,
  .learn-more:hover {
    color: var(--Light-red-text);
    background-color: var(--White);
  }
  .learn-more {
    margin-left: 0.7rem;
    color: var(--White);
    background-color: transparent;
    border: 1px solid var(--White);
  }
`;
