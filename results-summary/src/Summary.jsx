import iconMemory from "./assets/icon-memory.svg";
import iconReaction from "./assets/icon-reaction.svg";
import iconVerbal from "./assets/icon-verbal.svg";
import iconVisual from "./assets/icon-visual.svg";

const Summary = () => {
  return (
    <div className="summary">
      <h1>Summary</h1>

      <div className="score">
        <section className="icon">
          <img src={iconReaction} alt="icon-reaction" />
          <p className="reaction">Reaction</p>
        </section>
        <section className="result">
          <strong>80</strong>
          <p>/&nbsp;100</p>
        </section>
      </div>

      <div className="score">
        <section className="icon">
          <img src={iconMemory} alt="icon-memory" />
          <p className="memory">Memory</p>
        </section>
        <section className="result">
          <strong>80</strong>
          <p>/&nbsp;100</p>
        </section>
      </div>

      <div className="score">
        <section className="icon">
          <img src={iconVerbal} alt="icon-verbal" />
          <p className="verbal">Verbal</p>
        </section>
        <section className="result">
          <strong>80</strong>
          <p>/&nbsp;100</p>
        </section>
      </div>

      <div className="score">
        <section className="icon">
          <img src={iconVisual} alt="icon-visual" />
          <p className="visual">Visual</p>
        </section>
        <section className="result">
          <strong>80</strong>
          <p>/&nbsp;100</p>
        </section>
      </div>

      <a href="#">Continue</a>
    </div>
  );
};

export default Summary;
