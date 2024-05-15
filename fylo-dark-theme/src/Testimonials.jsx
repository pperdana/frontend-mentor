import profile1Img from "./assets/profile-1.jpg";
import profile2Img from "./assets/profile-2.jpg";
import profile3Img from "./assets/profile-3.jpg";

const Testimonials = () => {
  return (
    <section className="section-4 section-testimonials">
      <main>
        <div className="testimonials">
          <p className="testimonials-desc">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="avatar-div">
            <img className="avatar-img" src={profile1Img} alt="profile-1" />
            <div>
              <h4>Satish Patel</h4>
              <p className="position">Founder &amp; CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <p className="testimonials-desc">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="avatar-div">
            <img className="avatar-img" src={profile2Img} alt="profile-2" />
            <div>
              <h4>Bruce McKenzie</h4>
              <p className="position">Founder &amp; CEO, Huddle</p>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <p className="testimonials-desc">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="avatar-div">
            <img className="avatar-img" src={profile3Img} alt="profile-3" />
            <div>
              <h4>Iva Boyd</h4>
              <p className="position">Founder &amp; CEO, Huddle</p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Testimonials;
