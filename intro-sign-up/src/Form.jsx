const Form = () => {
  return (
    <div className="form-container flex flex-col gap-[20px]">
      <div className="header bg-[hsl(248,32%,49%)] py-[15px] px-[30px] text-[0.9rem] font-bold	rounded-[10px] shadow-[4px_5px_8px_4px_rgba(62,60,73,0.342)] transition-all	duration-500">
        Try it free 7 days
        <span>then $20/mo. thereafter</span>
      </div>

      <form id="fill">
        <div className="fill-item">
          <input
            type="text"
            name="firstName"
            id="firstname"
            placeholder="First Name"
          />
          <div className="error-text"></div>
        </div>
        <div className="fill-item">
          <input
            type="text"
            name="lastName"
            id="lastname"
            placeholder="Last Name"
          />
          <div className="error-text"></div>
        </div>
        <div className="fill-item">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
          />
          <div className="error-text"></div>
        </div>
        <div className="fill-item">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <div className="error-text"></div>
        </div>
        <input id="submit" type="button" value="CLAIM YOUR FREE TRIAL" />
        <p>
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
};

export default Form;
