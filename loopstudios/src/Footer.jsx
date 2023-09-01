const Footer = () => {
  return (
    <footer class="footer">
      <div class="container grid grid--footer">
        <div class="logo-nav">
          <a href="#" class="footer-logo">
            <img
              class="logo"
              alt="loopstudios"
              src="/src/assets/images/logo.svg"
            />
          </a>

          <ul class="footer-nav">
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">careers</a>
            </li>
            <li>
              <a href="#">events</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
            <li>
              <a href="#">support</a>
            </li>
          </ul>
        </div>

        <div class="address-col">
          <ul class="social-links">
            <li>
              <a class="footer-link" href="#">
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-instagram"
                  role="img"
                  aria-label="logo instagram"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-facebook"
                  role="img"
                  aria-label="logo facebook"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-twitter"
                  role="img"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
            </li>
            <li>
              <a class="footer-link" href="#">
                <ion-icon
                  class="social-icon md hydrated"
                  name="logo-twitter"
                  role="img"
                  aria-label="logo twitter"
                ></ion-icon>
              </a>
            </li>
          </ul>
          <p class="copyright">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
