const App = () => {
  return (
    <main className="main">
      <div className="contenedor">
        <div className="izquierda">
          <h1 className="title">Stay updated!</h1>
          <p className="info">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="list">
            <div className="list-style">
              <li>Product discovery and building what matters</li>
            </div>
            <div className="list-style">
              <li>Measuring to ensure updates are a success</li>
            </div>
            <div className="list-style">
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
          <img
            src="/assets/images/illustration-sign-up-desktop.svg"
            alt="Flowers"
          />
        </div>
      </div>
    </main>
  );
};

export default App;
