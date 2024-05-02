const Contents = () => {
  return (
    <div>
      <section className="section-2 section-featured">
        <div>
          <img
            src="images/icon-access-anywhere.svg"
            alt="icon-access-anywhere"
          />
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>

        <div>
          <img src="images/icon-security.svg" alt="icon-security" />
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>

        <div>
          <img src="images/icon-collaboration.svg" alt="icon-collaboration" />
          <h2>Real-time collaboration</h2>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>

        <div>
          <img src="images/icon-any-file.svg" alt="icon-any-file" />
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </section>

      <section className="section-3 section-info">
        <img
          src="images/illustration-stay-productive.png"
          alt="illustration-stay-productive"
        />
        <main>
          <h3>Stay productive, wherever you are</h3>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a className="cta-1" href="#">
            See how Fylo works
            <svg
              className="icon"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <circle id="b" cx="6" cy="6" r="6"></circle>
                <filter
                  x="-25%"
                  y="-25%"
                  width="150%"
                  height="150%"
                  filterUnits="objectBoundingBox"
                  id="a"
                >
                  <feOffset
                    in="SourceAlpha"
                    result="shadowOffsetOuter1"
                  ></feOffset>
                  <feGaussianBlur
                    stdDeviation="1"
                    in="shadowOffsetOuter1"
                    result="shadowBlurOuter1"
                  ></feGaussianBlur>
                  <feColorMatrix
                    values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                    in="shadowBlurOuter1"
                  ></feColorMatrix>
                </filter>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <g transform="translate(2 2)">
                  <use fill="#000" filter="url(#a)" xlink:href="#b"></use>
                  <use
                    className="circle-hover"
                    fill="#62E0D9"
                    xlink:href="#b"
                  ></use>
                </g>
                <path
                  d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                  fill="#1B2330"
                ></path>
              </g>
            </svg>
          </a>
        </main>
      </section>

      <section className="section-4 section-testimonials">
        <main>
          <div className="testimonials">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="avatar-div">
              <img src="images/profile-1.jpg" alt="profile-1" />
              <div>
                <h4>Satish Patel</h4>
                <p>Founder &amp; CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="avatar-div">
              <img src="images/profile-2.jpg" alt="profile-2" />
              <div>
                <h4>Bruce McKenzie</h4>
                <p>Founder &amp; CEO, Huddle</p>
              </div>
            </div>
          </div>

          <div className="testimonials">
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className="avatar-div">
              <img src="images/profile-3.jpg" alt="profile-3" />
              <div>
                <h4>Iva Boyd</h4>
                <p>Founder &amp; CEO, Huddle</p>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Contents;
