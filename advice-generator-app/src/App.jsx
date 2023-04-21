import "./App.scss";
import { useGlobalContext } from "./context";

function App() {
  const { fetchDadJoke, advice, adviceId } = useGlobalContext();
  return (
    <main>
      <section className="advice-container">
        <h1 className="advice-title">advice #{adviceId}</h1>

        <p className="advice-text">&quot;{advice}&quot;</p>
        <div className="divider">-----------</div>
        <div className="advice-btn">
          <button className="btn" onClick={fetchDadJoke}>
            TESTT
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
