const App = () => {
  return (
    <main className="prueba">
      <div className="contenedor">
        <div className="izquierda">
          <h2 className="title">Stay updated!</h2>
          <p className="info">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="list">
            <div className="list-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"></circle>
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  ></path>
                </g>
              </svg>
              <li>Product discovery and building what matters</li>
            </div>
            <div className="list-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"></circle>
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  ></path>
                </g>
              </svg>
              <li>Measuring to ensure updates are a success</li>
            </div>
            <div className="list-style">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
              >
                <g fill="none">
                  <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"></circle>
                  <path
                    stroke="#FFF"
                    stroke-width="2"
                    d="M6 11.381 8.735 14 15 8"
                  ></path>
                </g>
              </svg>
              <li>And much more!</li>
            </div>
          </ul>
          <form action="submit" className="formulario">
            <div className="contenedor-mensajes">
              <p>Email adress</p>
              <div>
                <p className="error"></p>
              </div>
            </div>

            <div className="contenedor-form">
              <input
                type="email"
                className="email"
                placeholder="email@company.com"
              />
              <button type="submit" className="btn">
                Subscribe to monthly newsletter
              </button>
            </div>
          </form>
        </div>
        <div className="derecha">
          <picture>
            <source
              media="(min-width:992px)"
              srcset="assets/images/illustration-sign-up-desktop.svg"
            />
            <source
              media="(max-width:768px)"
              srcset="assets/images/illustration-sign-up-mobile.svg"
            />
            <img
              src="/assets/images/illustration-sign-up-desktop.svg"
              alt="Flowers"
              style="width:auto;"
            />
          </picture>
        </div>
      </div>
    </main>
  );
};

export default App;
