import styled from "styled-components";
import logo from "./assets/logo.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div id="footerlogo">
        <img src={logo} alt="logo" />
      </div>
      <div id="Product">
        <div id="footerHeading">Product</div>
        <div id="productlinks" className="footerlink">
          <ul id="productlink" className="footerLinks">
            <li className="link">
              <a href="#">Overview</a>
            </li>
            <li className="link">
              <a href="#">Pricing</a>
            </li>
            <li className="link">
              <a href="#">Marketplace</a>
            </li>
            <li className="link">
              <a href="#">Features</a>
            </li>
            <li className="link">
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="Company">
        <div id="footerHeading">Company</div>
        <div id="Companylinks" className="footerlink">
          <ul id="Companylink" className="footerLinks">
            <li className="link">
              <a href="#">About</a>
            </li>
            <li className="link">
              <a href="#">Team</a>
            </li>
            <li className="link">
              <a href="#">Blog</a>
            </li>
            <li className="link">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="Connect">
        <div id="footerHeading">Connect</div>
        <div id="Connectlinks" className="footerlink">
          <ul id="Connectlink" className="footerLinks">
            <li className="link">
              <a href="#">Contact</a>
            </li>
            <li className="link">
              <a href="#">Newsletter</a>
            </li>
            <li className="link">
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.footer`
  display: flex;
  padding: 8vh 0;
  border-radius: 0 100px 0 0;
  justify-content: space-evenly;
  background-color: hsl(240, 10%, 16%);

  #footerHeading {
    font-weight: 600;
    color: var(--clr-white);
    margin-block: 2vh 6vh;
    font-family: var(--Overpass);
    font-size: 2.2rem;
  }

  .footerLinks a {
    /* width: 100%; */
    font-weight: 400;
    font-size: 1.85rem;
    color: var(--clr-neutral-grayish-blue);
  }
`;
