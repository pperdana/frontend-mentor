const Result = () => {
  return (
    <div className="result-container">
      <div className="category">
        <span id="years-number" className="number">
          - -
        </span>
        <span className="date-section">years</span>
      </div>

      <div className="category">
        <span id="months-number" className="number">
          - -
        </span>
        <span className="date-section">months</span>
      </div>

      <div className="category">
        <span id="days-number" className="number">
          - -
        </span>
        <span className="date-section">days</span>
      </div>
    </div>
  );
};

export default Result;
