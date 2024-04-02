const App = () => {
  return (
    <main className="dashboard">
      <article className="report-for">
        <header className="report-for__header">
          <img
            src="/image-jeremy.316cc3cc.webp"
            alt=""
            className="report-for__avatar"
          />
          <h1 className="report-for__heading">
            Report for <span className="report-for__name">Jeremy Robson</span>
          </h1>
        </header>
        <nav className="js-report-for__nav report-for__nav">
          <button
            id="daily"
            className="js-report-for__nav-button report-for__nav-button is-active"
          >
            Daily
          </button>
          <button
            id="weekly"
            className="js-report-for__nav-button report-for__nav-button"
          >
            Weekly
          </button>
          <button
            id="monthly"
            className="js-report-for__nav-button report-for__nav-button"
          >
            Monthly
          </button>
        </nav>
      </article>
      <article id="js-work" className="card work">
        <header className="card__header">
          <h2 className="card__title">Work</h2>
          <button
            className="card__button"
            aria-label="Settings (no function attached)"
          ></button>
        </header>
        <div className="card__time-container">
          <time className="card__hours" datetime="PT5H">
            5hrs
          </time>
          <span className="card__last-time">
            Yesterday - <time datetime="PT7H">7hrs</time>
          </span>
        </div>
      </article>{" "}
      <article id="js-play" className="card play">
        <header className="card__header">
          <h2 className="card__title">Play</h2>
          <button
            className="card__button"
            aria-label="Settings (no function attached)"
          ></button>
        </header>
        <div className="card__time-container">
          <time className="card__hours" datetime="PT1H">
            1hrs
          </time>
          <span className="card__last-time">
            Yesterday - <time datetime="PT2H">2hrs</time>
          </span>
        </div>
      </article>
      <article id="js-study" className="card study">
        <header className="card__header">
          <h2 className="card__title">Study</h2>
          <button
            className="card__button"
            aria-label="Settings (no function attached)"
          ></button>
        </header>
        <div className="card__time-container">
          <time className="card__hours" datetime="PT0H">
            0hrs
          </time>
          <span className="card__last-time">
            Yesterday - <time datetime="PT1H">1hrs</time>
          </span>
        </div>
      </article>
      <article id="js-exercise" className="card exercise">
        <header className="card__header">
          <h2 className="card__title">Exercise</h2>
          <button
            className="card__button"
            aria-label="Settings (no function attached)"
          ></button>
        </header>
        <div className="card__time-container">
          <time className="card__hours" datetime="PT1H">
            1hrs
          </time>
          <span className="card__last-time">
            Yesterday - <time datetime="PT1H">1hrs</time>
          </span>
        </div>
      </article>
      <article id="js-social" className="card social">
        <header className="card__header">
          <h2 className="card__title">Social</h2>
          <button
            className="card__button"
            aria-label="Settings (no function attached)"
          ></button>
        </header>
        <div className="card__time-container">
          <time className="card__hours" datetime="PT1H">
            1hrs
          </time>
          <span className="card__last-time">
            Yesterday - <time datetime="PT3H">3hrs</time>
          </span>
        </div>
      </article>
      <article id="js-self-care" className="card self-care">
        <header className="card__header">
          <h2 className="card__title">Self Care</h2>
          <button
            className="card__button"
            aria-label="Settings (no function attached)"
          ></button>
        </header>
        <div className="card__time-container">
          <time className="card__hours" datetime="PT0H">
            0hrs
          </time>
          <span className="card__last-time">
            Yesterday - <time datetime="PT1H">1hrs</time>
          </span>
        </div>
      </article>
    </main>
  );
};

export default App;
