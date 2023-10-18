import mockups from "./images/illustration-mockups.svg";

const Hero = () => {
  return (
    <section className="section-hero mt-[1.2rem]">
      <div className="hero my-0 mx-auto py-0 px-[7.3rem] flex gap-[2rem] max-w-[120rem]	xl:py-0 xl:px-[5.2rem] md:flex-col md:text-center	md:items-center">
        <div className="hero-img-box">
          <img
            src={mockups}
            alt="Web site illustration mockups"
            className="mockups"
          />
        </div>
        <div className="hero-text-box w-[30rem] md:w-auto">
          <h1 className="hero__heading text-[2.35rem] mt-[3rem] xl:mt-4 lg:mt-0 lg:text-lg md:mt-[3rem] md:text-[2.35rem] md:leading-10">
            Build The Community Your Fans Will Love
          </h1>
          <p className="hero__content mt-[1rem] mb-[2rem]">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a className="btn inline-flex	text-base bg-white py-[0.85rem] px-[3.5rem] rounded-[100px] shadow-[0_3px_10px_0px_rgba(0,0,0,0.5)] transition-all duration-300	focus:text-white focus:cursor-pointer hover:text-white hover:cursor-pointer md:py-[0.85rem] md:px-[4.5rem]">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
