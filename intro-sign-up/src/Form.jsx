const Form = () => {
  return (
    <div className="form-container flex flex-col gap-[20px]">
      <div className="header bg-[hsl(248,32%,49%)] py-[15px] px-[30px] text-[0.9rem] font-bold	rounded-[10px] shadow-[4px_5px_8px_4px_rgba(62,60,73,0.342)] transition-all	duration-500 sm:mx-[1.2rem]">
        Try it free 7 days
        <span className="font-normal text-gray-200">
          {" "}
          then $20/mo. thereafter
        </span>
      </div>

      <form
        id="fill"
        className="bg-white p-[20px] rounded-[10px] flex flex-col justify-center gap-[20px] sm:mx-[1.2rem]"
      >
        <div className="fill-item">
          <input
            className="form-input"
            type="text"
            name="firstName"
            id="firstname"
            placeholder="First Name"
          />
          <div className="error-text"></div>
        </div>
        <div className="fill-item">
          <input
            className="form-input"
            type="text"
            name="lastName"
            id="lastname"
            placeholder="Last Name"
          />
          <div className="error-text"></div>
        </div>
        <div className="fill-item">
          <input
            className="form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <div className="error-text"></div>
        </div>
        <div className="fill-item">
          <input
            className="form-input"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="error-text"></div>
        </div>
        <input
          id="submit"
          className="border-none	bg-[hsl(154,59%,51%)] rounded-[5px] shadow-[4px_5px_8px_4px_rgba(62,60,73,0.342)] text-white text-[1rem] py-[15px] px-[20px]	cursor-pointer	transition-all	duration-[450ms] hover:bg-[hsl(154,59%,65%)] hover:shadow-[3px_4px_8px_4px_rgba(62,60,73,0.5)]"
          type="button"
          value="CLAIM YOUR FREE TRIAL"
        />
        <p className="text-[hsl(246,25%,77%)] text-[10px]">
          By clicking the button, you are agreeing to our
          <span className="text-[hsl(0,100%,74%)] font-semibold">
            {" "}
            Terms and Services
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
