import thankIllustration from "./assets/illustration-thank-you.svg";

const Submitted = ({ activeNum, isSubmitted }) => {
  return (
    <section className={`submitted-section${isSubmitted ? "" : " hide"}`}>
      <div className="thank-you-img">
        <img src={thankIllustration} alt="Thank You Image" />
      </div>
      <div className="rate-selected">
        <p className="rate-text h-[1.5rem]">
          You selected {activeNum} out of 5
        </p>
      </div>
      <h1 className="title mt-[2.4rem] mb-[1.6rem]">Thank you!</h1>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don&rsquo;t hesitate to get in touch!
      </p>
    </section>
  );
};

export default Submitted;
