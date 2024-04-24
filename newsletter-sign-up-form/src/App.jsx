import ill from "./assets/illustration-sign-up-desktop.svg";
import listIcon from "./assets/icon-list.svg";

const App = () => {
  return (
    <main className="main">
      <div className="card">
        <div className="text-container">
          <h1 className="title">Stay updated!</h1>
          <p className="info">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="list">
            <div className="list-style">
              <img src={listIcon} alt="list icon" />
              <li>Product discovery and building what matters</li>
            </div>
            <div className="list-style">
              <img src={listIcon} alt="list icon" />
              <li>Measuring to ensure updates are a success</li>
            </div>
            <div className="list-style">
              <img src={listIcon} alt="list icon" />
              <li>And much more!</li>
            </div>
          </ul>
          <form action="submit" className="form">
            <div className="message-form">
              <p>Email adress</p>
              <div>
                <p className="error"></p>
              </div>
            </div>

            <div className="container-form">
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
        <div className="img-container">
          <img src={ill} alt="Flowers" />
        </div>
      </div>
    </main>
  );
};

export default App;
