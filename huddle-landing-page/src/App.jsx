const App = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container py-5 flex-nowrap">
          <a className="navbar-brand" href="#">
            <img
              className="img-fluid logo"
              src="./images/logo.svg"
              alt="Bootstrap"
            />
          </a>
          <button className="text-capitalize rounded-5 fw-bold navbutton">
            try it free
          </button>
        </div>
      </nav>
    </>
  );
};

export default App;
