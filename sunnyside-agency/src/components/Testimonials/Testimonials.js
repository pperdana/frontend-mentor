import "./Testimonials.styles.scss";
import emilyImg from "../../images/image-emily.jpg";
import jennieImg from "../../images/image-jennie.jpg";
import thomasImg from "../../images/image-thomas.jpg";

const Testimonials = () => {
  return (
    <section class="section-testimonials" id="testimonials">
      <div className="testimonials">
        <div class="testimonials-heading-box">
          <h2 class="heading-secondary">Client testimonials</h2>
        </div>

        <div class="container testimonials-grid ">
          {/*  TESTIMONAIL 01*/}
          <div class="testimonial">
            <div className="testimonial-img-box">
              <img src={emilyImg} class="testimonial-img" alt="emily" />
            </div>

            <div class="testimonial-desc">
              <p class="testimonial-text">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
            </div>

            <div class="testimonial-person">
              <h3 class="testimonial-name">Emily R.</h3>
              <p class="testimonial-profession">Marketing Director</p>
            </div>
          </div>

          {/*  TESTIMONAIL 02*/}
          <div class="testimonial">
            <div className="testimonial-img-box">
              <img src={thomasImg} class="testimonial-img" alt="thomas" />
            </div>

            <div class="testimonial-desc">
              <p class="testimonial-text">
                Sunnyside’s enthusiasm coupled with their keen interest in our
                brand’s success made it a satisfying and enjoyable experience.
              </p>
            </div>

            <div class="testimonial-person">
              <h3 class="testimonial-name">Thomas S.</h3>
              <p class="testimonial-profession">Chief Operating Officer</p>
            </div>
          </div>

          {/*  TESTIMONAIL 03*/}
          <div class="testimonial">
            <div className="testimonial-img-box">
              <img src={jennieImg} class="testimonial-img" alt="jennie" />
            </div>

            <div class="testimonial-desc">
              <p class="testimonial-text">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
            </div>

            <div class="testimonial-person">
              <h3 class="testimonial-name">Jennie F.</h3>
              <p class="testimonial-profession">Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
