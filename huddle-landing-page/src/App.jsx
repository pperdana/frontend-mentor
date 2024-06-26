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
      <section className="text-center">
        <h1 className="my-5 fw-bold">
          Build The Community Your Fans Will Love
        </h1>
        <p className="my-md-4 mx-md-5 mx-2 my-4 fw-semibold ">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt
          numquam iure quidem illum rerum sunt tempore ducimus. Hic quisquam
          recusandae eaque, facere unde, atque ducimus veritatis culpa et quas
          voluptatibus. Repellat quidem doloremque, excepturi provident aperiam
          sequi obcaecati quam pariatur. Beatae velit temporibus laudantium
          inventore dolore. Debitis sapiente laboriosam velit?
        </p>
        <button className="text-capitalize py-3 px-4 rounded-5 fw-bold buttonhero">
          Get Started For Free
        </button>
      </section>
      <section className="text-center my-5">
        <img
          className="img-fluid px-2 "
          src="./images/screen-mockups.svg"
          alt=""
        />
        <div className="row gx-0 my-5 d-flex flex-md-row flex-column align-content-center">
          <div className="col-12 text-center col-md-6 px-0">
            <img
              className="text-end mx-3"
              src="./images/icon-communities.svg"
              alt=""
            />
            <h1>4.6k+</h1>
            <p>communities Formed</p>
          </div>
          <div className="col-12 text-center col-md-6 px-0">
            <img src="./images/icon-messages.svg" alt="" />
            <h1>2.7m+</h1>
            <p>Messages Send</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
