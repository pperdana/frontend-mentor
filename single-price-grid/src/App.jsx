import "./styles/App.scss";

function App() {
  return (
    <>
      <main>
        <div className="card-container">
          <div className="header-box">
            <h1>Join our community</h1>
            <span> 30-day, hassle-free money back guarantee</span>
            <p>
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>

          <div className="desc-box">
            <div className="subscription">
              <h2>Monthly Subscription</h2>
              <span>&dollar;29 per month</span>
              <p>Full access for less than &dollar;1 a day</p>
              <button>Sign Up</button>
            </div>

            <div className="about-us">
              <h2>Why Us</h2>
              <ul>
                <li>Tutorials by industry experts</li>
                <li>Peer &amp; expert code review</li>
                <li>Coding exercises</li>
                <li>Access to our GitHub repos</li>
                <li>Community forum</li>
                <li>Flashcard decks</li>
                <li>New videos every week</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
