const App = () => {
  return (
    <main>
      <div className="section">
        <div className="card">
          <section className="result-number">
            <h1>Your Result</h1>
            <div className="circle">
              <h2>76</h2>
              <h3>of 100</h3>
            </div>
          </section>
          <section className="result-text">
            <h2>Great</h2>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </section>
        </div>
        <div className="summary">
          <h1>Summary</h1>

          <div className="score">
            <section className="icon">
              <img src="assets/images/icon-reaction.svg" alt="icon-reaction" />
              <p className="reaction">Reaction</p>
            </section>
            <section className="result">
              <strong>80</strong>
              <p>/&nbsp;100</p>
            </section>
          </div>

          <div className="score">
            <section className="icon">
              <img src="assets/images/icon-memory.svg" alt="icon-memory" />
              <p className="memory">Memory</p>
            </section>
            <section className="result">
              <strong>80</strong>
              <p>/&nbsp;100</p>
            </section>
          </div>

          <div className="score">
            <section className="icon">
              <img src="assets/images/icon-verbal.svg" alt="icon-verbal" />
              <p className="verbal">Verbal</p>
            </section>
            <section className="result">
              <strong>80</strong>
              <p>/&nbsp;100</p>
            </section>
          </div>

          <div className="score">
            <section className="icon">
              <img src="assets/images/icon-visual.svg" alt="icon-visual" />
              <p className="visual">Visual</p>
            </section>
            <section className="result">
              <strong>80</strong>
              <p>/&nbsp;100</p>
            </section>
          </div>

          <a href="#">Continue</a>
        </div>
      </div>
    </main>
  );
};

export default App;
