import Cta from "./Cta";
import Footer from "./Footer";
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

      <section className="text-center">
        <img
          className="w-100"
          src="./images/bg-section-top-desktop-1.svg"
          alt=""
        />
        <div className="row gx-0 grow mx-0 px-0">
          <div className="col-12 col-md-6 px-0">
            <h1 className="urban my-md-5 my2">Grow Together</h1>
            <p className="urban mx-0 my-3 px-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
              quos cum. Nulla eos, incidunt recusandae in aliquid ullam
              cupiditate aspernatur, nemo corporis, quaerat explicabo? Voluptas
              in reprehenderit officia explicabo consectetur!
            </p>
          </div>
          <div className="col-12 col-md-6 px-0">
            <img
              className="w-75 my-5 my-md-0"
              src="./images/illustration-grow-together.svg"
              alt=""
            />
          </div>
        </div>
        <img
          className="w-100"
          src="./images/bg-section-bottom-desktop-1.svg"
          alt=""
        />
      </section>

      <section className="text-center my-5">
        <div className="row gx-0">
          <div className="col-12 col-md-6 px-0">
            <img
              className="w-75"
              src="./images/illustration-flowing-conversation.svg"
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 px-0">
            <h1 className="my-5 urban">Flowing Conversations</h1>
            <p className="px-4 urban">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint ea
              consequuntur animi doloribus perferendis, accusamus magnam quod
              inventore voluptatibus velit.
            </p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <img
          className="w-100"
          src="./images/bg-section-top-desktop-2.svg"
          alt=""
        />
        <div className="row grow gx-0">
          <div className="col-12 col-md-6 px-0">
            <h1 className="urban my-2 my-md-5">Your Users</h1>
            <p className="urban mx-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum
              magnam illum repellat molestias officia, libero iste nihil id unde
              sed aperiam voluptas tempore et voluptatum? Quae voluptas neque
              repellendus optio.
            </p>
          </div>
          <div className="col-12 col-md-6 px-0">
            <img
              className="w-75 my-5 my-md-0"
              src="./images/illustration-your-users.svg"
              alt=""
            />
          </div>
        </div>
        <img
          className="w-100"
          src="./images/bg-section-bottom-desktop-2.svg"
          alt=""
        />
      </section>

      <Cta />
      <Footer />
    </>
  );
};

export default App;
