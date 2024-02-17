const Card = () => {
  return (
    <div className="card">
      <div className="result-number text-center	">
        <h1 className="mb-[2rem] text-[hsl(241,100%,89%)] text-[22px] font-bold">
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
        <h2 className="mb-[1rem] text-[hsl(0,0%,100%)] text-[2rem] font-bold">
          Great
        </h2>
        <p className="text-[hsl(221,100%,96%)]">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </div>
  );
};

export default Card;
