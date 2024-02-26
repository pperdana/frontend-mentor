const Card = () => {
  return (
    <section className="card-section">
      <div className="star-icon">
        <img src="./images/icon-star.svg" alt="Icon Star" />
      </div>
      <h1 className="card-title">How did we do?</h1>
      <p className="card-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rate">
        <div className="rate-num">1</div>
        <div className="rate-num">2</div>
        <div className="rate-num">3</div>
        <div className="rate-num">4</div>
        <div className="rate-num">5</div>
      </div>
      <button className="btn">SUBMIT</button>
    </section>
  );
};

export default Card;
