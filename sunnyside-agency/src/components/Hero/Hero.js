import "./Hero.styles.scss";
import arrowIcon from "../../images/icon-arrow-down.svg";

const Hero = () => {
  return (
    <section class="section-hero" id="home">
      <div class="hero">
        <div class="hero-text-box">
          <h1 class="heading-primary">We are creatives</h1>
        </div>
        <div class="hero-img-box">
          <picture>
            <img src={arrowIcon} class="hero-img" alt="arrow down" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
