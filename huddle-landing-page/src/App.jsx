import Hero from "./Hero";
import Header from "./Header";
import Cta from "./Cta";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />

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
