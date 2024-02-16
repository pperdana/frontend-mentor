const Card = () => {
  return (
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
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
    </div>
  );
};

export default Card;
