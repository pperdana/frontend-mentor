import illustration from "./assets/illustration-dashboard.png";

const Hero = () => {
  return (
    <main>
      <section className="form">
        <h1>
          We are launching <strong>soon!</strong>
        </h1>
        <p className="subscribe">Subscribe and get notified</p>
        <form id="form" action="/" method="post">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address..."
          />
          <button type="submit" id="button">
            Notify Me
          </button>
        </form>
      </section>

      <section className="illustration">
        <img src={illustration} alt="Illustration dashboard" />
      </section>
    </main>
  );
};

export default Hero;
