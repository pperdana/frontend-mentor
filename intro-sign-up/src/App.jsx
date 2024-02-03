const App = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="context">
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>

          <div className="tryout">
            <div className="header">
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
                  autocomplete="given-name"
                />
                <div className="error-text"></div>
              </div>
              <div className="fill-item">
                <input
                  type="text"
                  name="lastName"
                  id="lastname"
                  placeholder="Last Name"
                  autocomplete="given-name"
                />
                <div className="error-text"></div>
              </div>
              <div className="fill-item">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  autocomplete="off"
                />
                <div className="error-text"></div>
              </div>
              <div className="fill-item">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  autocomplete="off"
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
        </div>
      </div>
    </>
  );
};

export default App;
