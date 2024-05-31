const Footer = () => {
  return (
    <footer>
      <div id="footerlogo">
        <img src="./images/logo.svg" alt="logo" />
      </div>
      <div id="Product">
        <div id="footerHeading">Product</div>
        <div id="productlinks" class="footerlink">
          <ul id="productlink" class="footerLinks">
            <li class="link">
              <a href="#">Overview</a>
            </li>
            <li class="link">
              <a href="#">Pricing</a>
            </li>
            <li class="link">
              <a href="#">Marketplace</a>
            </li>
            <li class="link">
              <a href="#">Features</a>
            </li>
            <li class="link">
              <a href="#">Integrations</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="Company">
        <div id="footerHeading">Company</div>
        <div id="Companylinks" class="footerlink">
          <ul id="Companylink" class="footerLinks">
            <li class="link">
              <a href="#">About</a>
            </li>
            <li class="link">
              <a href="#">Team</a>
            </li>
            <li class="link">
              <a href="#">Blog</a>
            </li>
            <li class="link">
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="Connect">
        <div id="footerHeading">Connect</div>
        <div id="Connectlinks" class="footerlink">
          <ul id="Connectlink" class="footerLinks">
            <li class="link">
              <a href="#">Contact</a>
            </li>
            <li class="link">
              <a href="#">Newsletter</a>
            </li>
            <li class="link">
              <a href="#">Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
