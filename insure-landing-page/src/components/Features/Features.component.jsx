import "./Features.styles.scss";

import snappyProcessIcon from "../../assets/images/icon-snappy-process.svg";
import affordablePricesIcon from "../../assets/images/icon-affordable-prices.svg";
import peopleFirstIcon from "../../assets/images/icon-people-first.svg";

const Features = () => {
  return (
    <section className="section-features">
      <div className="feature-container">
        <h2 className="heading-secondary">We’re different </h2>
      </div>

      <div className="feature-container">
        {/* feature 01 */}
        <div className="feature">
          <img
            src={snappyProcessIcon}
            className="feature-img"
            alt="snappy process icon"
          />

          <div className="feature-content">
            <span className="feature-title">Snappy Process</span>
            <p className="feature-text">
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>
        </div>

        {/* feature 02 */}
        <div className="feature">
          <img
            src={affordablePricesIcon}
            className="feature-img"
            alt="snappy process icon"
          />

          <div className="feature-content">
            <span className="feature-title">Affordable Prices</span>
            <p className="feature-text">
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
        </div>

        {/* feature 03 */}
        <div className="feature">
          <img
            src={peopleFirstIcon}
            className="feature-img"
            alt="snappy process icon"
          />

          <div className="feature-content">
            <span className="feature-title">People First</span>
            <p className="feature-text">
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
