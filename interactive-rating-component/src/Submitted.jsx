import thankIllustration from "./assets/illustration-thank-you.svg";

const Submitted = () => {
  return (
    <section className="submitted-section">
      <div className="thank-you-img">
        <img src={thankIllustration} alt="Thank You Image" />
      </div>
      <div className="rate-selected">
        <p className="text"></p>
      </div>
      <h1 className="title">Thank you!</h1>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&rsquo;t hesitate to get in touch!
      </p>
    </section>
  );
};

export default Submitted;
