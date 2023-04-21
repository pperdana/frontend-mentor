import "./App.scss";
import { useGlobalContext } from "./context";
import diceIcon from "./images/icon-dice.svg";

import divider from "./images/pattern-divider-desktop.svg";

function App() {
  const { fetchDadJoke, advice, adviceId } = useGlobalContext();
  return (
    <main>
      <section className="advice-container">
        <h1 className="advice-title">advice #{adviceId}</h1>

        <p className="advice-text">&quot;{advice}&quot;</p>
        <div className="divider">
          <img src={divider} alt="divider" />
        </div>
        <div className="advice-btn">
          <img
            src={diceIcon}
            alt="dice icon"
            className="dice-icon"
            onClick={fetchDadJoke}
          />
        </div>
      </section>
    </main>
  );
}

export default App;
