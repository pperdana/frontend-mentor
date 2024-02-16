import iconMemory from "./assets/icon-memory.svg";
import iconReaction from "./assets/icon-reaction.svg";
import iconVerbal from "./assets/icon-verbal.svg";
import iconVisual from "./assets/icon-visual.svg";

const Summary = () => {
  return (
    <div className="summary">
      <h1 className="text-[hsl(224,30%,27%)] text-[1.5rem] mb-[2rem]">
        Summary
      </h1>

      <div className="score">
        <section className="icon">
          <img src={iconReaction} alt="icon-reaction" />
          <p className="reaction text-[hsl(0,100%,67%)]">Reaction</p>
        </section>
        <section className="result">
          <strong>80</strong>
          <p>/&nbsp;100</p>
        </section>
      </div>

      <div className="score">
        <section className="icon">
          <img src={iconMemory} alt="icon-memory" />
          <p className="memory text-[hsl(39,100%,56%)]">Memory</p>
        </section>
        <section className="result">
          <strong>80</strong>
          <p>/&nbsp;100</p>
        </section>
      </div>

      <div className="score">
        <section className="icon">
          <img src={iconVerbal} alt="icon-verbal" />
          <p className="verbal text-[hsl(166,100%,37%)]">Verbal</p>
        </section>
        <section className="result">
          <strong>80</strong>
          <p>/&nbsp;100</p>
        </section>
      </div>

      <div className="score">
        <section className="icon">
          <img src={iconVisual} alt="icon-visual" />
          <p className="visual text-[hsl(234,85%,45%)]">Visual</p>
        </section>
        <section className="result">
          <strong>80</strong>
          <p>/&nbsp;100</p>
        </section>
      </div>

      <button className="btn">Continue</button>
    </div>
  );
};

export default Summary;
