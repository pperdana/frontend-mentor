import "./Hero.styles.scss";

import heroImg from "../../assets/images/image-intro-desktop.jpg";

const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">Humanizing your insurance.</h1>
          <p className="hero-description">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that’s right for
            you. Ensure you and your loved ones are protected.
          </p>
          <a href="#" className="btn">
            View plans
          </a>
        </div>

        <div className="hero-img-box">
          <img
            src={heroImg}
            className="hero-img"
            alt="A family spend their time together"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
