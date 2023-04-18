import "./Hero.styles.scss";
import arrowIcon from "../../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section className="section-hero" id="home">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">We are creatives</h1>
        </div>
        <div className="hero-img-box">
          <picture>
            <img src={arrowIcon} className="hero-img" alt="arrow down" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
