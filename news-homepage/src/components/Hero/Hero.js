import "./Hero.styles.css";
const Hero = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-img-box">
          <picture>
            <div className="hero-img"></div>
          </picture>
        </div>

        <div className="hero-text-box">
          <h1 class="heading-primary">The Bright Future of Web 3.0?</h1>
          <div className="hero-text-btn-box">
            <p class="hero-description">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <a href="#cta" class="btn">
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
