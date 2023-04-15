import "./New.styles.css";

const New = () => {
  return (
    <section className="section-new">
      <div class="new-news">
        <span class="subheading">New</span>
        {/* NEW 1 */}
        <div className="new-text-box">
          <a href="#new1" className="new-heading-link heading-secondary">
            Hydrogen VS Electric Cars
          </a>
          <p className="new-text">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>

        <hr className="devider" />

        {/* NEW 2 */}
        <div className="new-text-box">
          <a href="#new2" className="new-heading-link heading-secondary">
            The Downsides of AI Artistry
          </a>
          <p className="new-text">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>

        <hr className="devider" />

        {/* NEW 3 */}
        <div className="new-text-box">
          <a href="#new3" className="new-heading-link heading-secondary">
            Is VC Funding Drying Up?
          </a>
          <p className="new-text">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </section>
  );
};

export default New;
