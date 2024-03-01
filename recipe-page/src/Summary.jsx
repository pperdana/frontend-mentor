const Summary = () => {
  return (
    <summary className="summary bg-[hsl(330,100%,98%)] rounded-[22px] px-0 py-[1.6rem] pl-[32px]">
      <p>Preparation time</p>
      <ul className="summary-list">
        <li>
          <p>
            <span>Total:</span> Approximately 10 minutes
          </p>
        </li>
        <li>
          <p>
            <span>Preparation:</span> 5 minutes
          </p>
        </li>
        <li>
          <p>
            <span>Cooking:</span> 5 minutes
          </p>
        </li>
      </ul>
    </summary>
  );
};

export default Summary;
