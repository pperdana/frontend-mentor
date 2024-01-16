import { useState } from "react";
import illustration from "./assets/illustration-dashboard.png";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [valid, setValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes(".com")) {
      setEmail("");
      setValid(true);
    } else {
      console.log("please provide valid email address");
      setValid(false);
    }
  };

  return (
    <main>
      <section className="form text-center">
        <h1 className="text-[3rem] mb-[1.15rem] text-[hsl(0,0%,59%)] md:text-[2.4rem] sm:text-[1.6rem] sm:mb-[.8rem]">
          We are launching <strong className="text-black">soon!</strong>
        </h1>
        <p className="subscribe text-[1.25rem] mb-[2.28rem] sm:text-[0.85rem]">
          Subscribe and get notified
        </p>

        <div className="form-box flex justify-center">
          <form
            id="form"
            className="max-w-[500px] my-0  mb-auto relative flex items-center justify-center gap-[16px] md:mx-[16px]"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              name="email"
              id="email"
              className="h-[55px] rounded-[2rem] max-w-[350px] m-0 text-[1.125rem]  w-[100%] outline-none	border-[1px] border-solid border-[hsl(223,100%,88%)] py-[16px] px-[32px] md:max-w-[330px] sm:max-w-[80%] sm:h-[48px] sm:text-[1rem]"
              placeholder="Your email address..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {valid || (
              <p className="text-[12px] text-red-600 italic absolute top-[128%]	left-[27.6%] translate-x-[-50%] translate-y-[-50%]">
                please provide valid email address
              </p>
            )}

            <button
              type="submit"
              id="button"
              className="h-[55px] w-[170px] bg-[hsl(223,87%,63%)]  text-white	cursor-pointer shadow-[2px_3px_10px_rgba(79,125,242,.5)] transition-all	duration-300 ease-linear rounded-[2rem] text-[18px] hover:bg-[rgba(79,125,242,.8)] hover:shadow-[2px_3px_10px_rgba(79,125,242,.3)] sm:w-[80%] sm:h-[48px]"
            >
              Notify Me
            </button>
          </form>
        </div>
      </section>

      <section className="illustration flex justify-center mt-[5rem]">
        <img
          src={illustration}
          alt="Illustration dashboard"
          className="w-[50%] md:w-[80%]"
        />
      </section>
    </main>
  );
};

export default Hero;
