import mockups from "./images/illustration-mockups.svg";
const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-img-box">
          <img
            src={mockups}
            alt="Web site illustration mockups"
            className="mockups"
          />
        </div>
        <div className="hero-text-box">
          <h1 className="hero__heading">
            Build The Community Your Fans Will Love
          </h1>
          <p className="hero__content">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <a className="btn">Register</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
