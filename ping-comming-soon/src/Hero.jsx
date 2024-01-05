import illustration from "./assets/illustration-dashboard.png";

const Hero = () => {
  return (
    <main>
      <section className="form text-center">
        <h1 className="text-[3rem] mb-[1.15rem]">
          We are launching <strong>soon!</strong>
        </h1>
        <p className="subscribe text-[1.25rem] mb-[2.28rem]">
          Subscribe and get notified
        </p>
        <form
          id="form"
          className="w-[60%] my-0  mb-auto flex flex-wrap	justify-center items-center gap-[0.5rem]"
          action="/"
          method="post"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="rounded-[2rem]"
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
