const App = () => {
  return (
    <main>
      <section className="active-state">
        <div className="star-icon">
          <img src="./images/icon-star.svg" alt="Icon Star" />
        </div>
        <h1 className="title">How did we do?</h1>
        <p className="text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
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

      <section className="thank-you-state">
        <div className="thank-you-img">
          <img
            src="./images/illustration-thank-you.svg"
            alt="Thank You Image"
          />
        </div>
        <div className="rate-selected">
          <p className="rate-text"></p>
        </div>
        <h1 className="title">Thank you!</h1>
        <p className="text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&rsquo;t hesitate to get in touch!
        </p>
      </section>
    </main>
  );
};

export default App;
