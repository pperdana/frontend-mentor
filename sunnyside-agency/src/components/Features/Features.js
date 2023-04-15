import "./Features.styles.scss";

import transformImg from "../../images/desktop/image-transform.jpg";
import standOutImg from "../../images/desktop/image-stand-out.jpg";
import graphDesignImg from "../../images/desktop/image-graphic-design.jpg";
import photoImg from "../../images/desktop/image-photography.jpg";

const Features = () => {
  return (
    <section class="section-features" id="features">
      <div class="container grid-features  grid--center-v">
        {/* <!-- FEATURE 01 --> */}
        <div class="feature-text-box left-text-box">
          <h3 class="heading-tertiary">Transform your brand</h3>
          <p class="feature-description">
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

        <div class="feature-img-box">
          <img src={transformImg} class="feature-img" alt="transform" />
        </div>

        {/* <!-- FEATURE 02 --> */}
        <div class="feature-img-box ">
          <img src={standOutImg} class="feature-img" alt="stand out" />
        </div>
        <div class="feature-text-box right-text-box">
          <h3 class="heading-tertiary">Stand out to the right audience</h3>
          <p class="feature-description">
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
        <div class="feature-img-text-box img--graphic-design">
          <div className="text-area">
            <h3 class="heading-tertiary">Graphic Design</h3>
            <p class="feature-description">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients’
              attention.
            </p>
          </div>
        </div>

        {/* <!-- FEATURE 04 --> */}
        <div class="feature-img-text-box img--photography">
          <div className="text-area">
            <h3 class="heading-tertiary">Photography</h3>
            <p class="feature-description">
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
