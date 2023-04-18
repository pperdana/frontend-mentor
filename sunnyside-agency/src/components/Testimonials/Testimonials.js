import "./Testimonials.styles.scss";
import emilyImg from "../../images/image-emily.jpg";
import jennieImg from "../../images/image-jennie.jpg";
import thomasImg from "../../images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials">
        <div className="testimonials-heading-box">
          <h2 className="heading-secondary">Client testimonials</h2>
        </div>

        <div className="container testimonials-grid ">
          {/*  TESTIMONAIL 01*/}
          <div className="testimonial">
            <div className="testimonial-img-box">
              <img src={emilyImg} className="testimonial-img" alt="emily" />
            </div>

            <div className="testimonial-desc">
              <p className="testimonial-text">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
            </div>

            <div className="testimonial-person">
              <h3 className="testimonial-name">Emily R.</h3>
              <p className="testimonial-profession">Marketing Director</p>
            </div>
          </div>

          {/*  TESTIMONAIL 02*/}
          <div className="testimonial">
            <div className="testimonial-img-box">
              <img src={thomasImg} className="testimonial-img" alt="thomas" />
            </div>

            <div className="testimonial-desc">
              <p className="testimonial-text">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
            </div>

            <div className="testimonial-person">
              <h3 className="testimonial-name">Thomas S.</h3>
              <p className="testimonial-profession">Chief Operating Officer</p>
            </div>
          </div>

          {/*  TESTIMONAIL 03*/}
          <div className="testimonial">
            <div className="testimonial-img-box">
              <img src={jennieImg} className="testimonial-img" alt="jennie" />
            </div>

            <div className="testimonial-desc">
              <p className="testimonial-text">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
            </div>

            <div className="testimonial-person">
              <h3 className="testimonial-name">Jennie F.</h3>
              <p className="testimonial-profession">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
