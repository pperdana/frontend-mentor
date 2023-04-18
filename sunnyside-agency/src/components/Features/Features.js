import "./Features.styles.scss";

import transformImg from "../../images/desktop/image-transform.jpg";
import standOutImg from "../../images/desktop/image-stand-out.jpg";
import graphDesignImg from "../../images/desktop/image-graphic-design.jpg";
import photoImg from "../../images/desktop/image-photography.jpg";

const Features = () => {
  return (
    <section className="section-features" id="features">
      <div className="container grid-features  grid--center-v">
        {/* <!-- FEATURE 01 --> */}
        <div className="feature-text-box left-text-box">
          <h3 className="heading-tertiary">Transform your brand</h3>
          <p className="feature-description">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <div className="feature-link-box">
            <div className="feature-link-area">
              <a href="#" className="feature-link">
                Learn More
              </a>

              <hr className="feature-link--line orange-line" />
            </div>
          </div>
        </div>

        <div className="feature-img-box">
          <img src={transformImg} className="feature-img" alt="transform" />
        </div>

        {/* <!-- FEATURE 02 --> */}
        <div className="feature-img-box ">
          <img src={standOutImg} className="feature-img" alt="stand out" />
        </div>
        <div className="feature-text-box right-text-box">
          <h3 className="heading-tertiary">Stand out to the right audience</h3>
          <p className="feature-description">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <div className="feature-link-box">
            <div className="feature-link-area">
              <a href="#" className="feature-link">
                Learn More
              </a>

              <hr className="feature-link--line red-line" />
            </div>
          </div>
        </div>

        {/* <!-- FEATURE 03 --> */}
        <div className="feature-img-text-box img--graphic-design">
          <div className="text-area">
            <h3 className="heading-tertiary">Graphic Design</h3>
            <p className="feature-description">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        {/* <!-- FEATURE 04 --> */}
        <div className="feature-img-text-box img--photography">
          <div className="text-area">
            <h3 className="heading-tertiary">Photography</h3>
            <p className="feature-description">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
