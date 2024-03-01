const Summary = () => {
  return (
    <summary className="summary bg-[hsl(330,100%,98%)] rounded-[2.2rem] px-0 py-[1.6rem] pl-[3.2rem] list-none">
      <p className="text-[hsl(332,51%,32%)] font-semibold text-[2rem] my-[1rem]">
        Preparation time
      </p>
      <ul className="summary-list text-[1.5rem]">
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
