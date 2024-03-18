const Form = () => {
  return (
    <form id="dob-form">
      <div className="fields">
        <div className="input-group">
          <label for="day">day</label>
          <input type="number" name="day" id="day" placeholder="dd" />
          <span id="day-error" className="error-text hidden"></span>
        </div>

        <div className="input-group">
          <label for="month">month</label>
          <input type="number" name="month" id="month" placeholder="mm" />
          <span id="month-error" className="error-text hidden"></span>
        </div>

        <div className="input-group">
          <label for="year">year</label>
          <input type="number" name="year" id="year" placeholder="yyyy" />
          <span id="year-error" className="error-text hidden"></span>
        </div>
      </div>

      <div className="submit-container">
        <div className="line"></div>
        <button type="submit">
          <span className="sr-only">Calculate</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="44"
            viewBox="0 0 46 44"
          >
            <g fill="none" stroke="#FFF" stroke-width="4">
              <path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"></path>
            </g>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default Form;
