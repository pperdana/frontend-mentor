const Card = () => {
  return (
    <section className="card">
      <div className="result-number text-center	">
        <h1 className="title mb-[2rem] text-[hsl(241,100%,89%)] text-[22px] font-bold sm:mb-[1.2rem]">
          Your Result
        </h1>
        <div className="circle">
          <h2 className="text-[hsl(0,0%,100%)] text-[3.5rem] font-bold">76</h2>
          <h3 className="text-[hsl(241,100%,89%)] font-bold text-[18px]">
            of 100
          </h3>
        </div>
      </div>
      <div className="result-text">
        <h2 className="mb-[1rem] text-[hsl(0,0%,100%)] text-[2rem] font-bold sm:text-[1.6rem] sm:mb-[0.4rem]">
          Great
        </h2>
        <p className="text-[hsl(241,100%,89%)] leading-[22px]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
};

export default Card;
