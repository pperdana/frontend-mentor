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
          className="my-0  mb-auto flex flex-wrap	justify-center items-center gap-[0.5rem]"
          action="/"
          method="post"
        >
          <input
            type="email"
            name="email"
            id="email"
            className="h-[55px] rounded-[2rem] max-w-[300px] m-0 text-[1.125rem]  w-[100%] outline-none	border-[1px] border-solid border-[hsl(223,100%,88%)] py-[16px] px-[32px]"
            placeholder="Your email address..."
          />
          <button
            type="submit"
            id="button"
            className="h-[55px] w-[143px] bg-[hsl(223,87%,63%)]  text-white	cursor-pointer shadow-[2px_3px_10px_rgba(79,125,242,.5)] transition-all	duration-300 ease-linear rounded-[2rem] text-[18px]"
          >
            Notify Me
          </button>
        </form>
      </section>

      <section className="illustration">
        {/* <img src={illustration} alt="Illustration dashboard" /> */}
      </section>
    </main>
  );
};

export default Hero;
