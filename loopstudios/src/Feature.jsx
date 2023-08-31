const Feature = () => {
  return (
    <section className="section-feature" id="feature">
      <div className="text-container">
        <h2 className="heading-secondary">Our creations</h2>
        <button>See all</button>
      </div>

      <div className="gallery">
        <figure className="gallery-item">
          <img
            src="/src/assets/images/desktop/image-deep-earth.jpg"
            alt="Deep earth"
          />
          <span>deep earth</span>
        </figure>
        <figure className="gallery-item">
          <img
            src="/src/assets/images/desktop/image-night-arcade.jpg"
            alt="Night arcade"
          />
          <span>night arcade</span>
        </figure>
        <figure className="gallery-item">
          <img
            src="/src/assets/images/desktop/image-soccer-team.jpg"
            alt="soccer team"
          />
          <span>soccer team</span>
        </figure>
        <figure className="gallery-item">
          <img src="/src/assets/images/desktop/image-grid.jpg" alt="the grid" />
          <span>the grid</span>
        </figure>
        <figure className="gallery-item">
          <img
            src="/src/assets/images/desktop/image-from-above.jpg"
            alt="from up above vr"
          />
          <span>from up above vr</span>
        </figure>
        <figure className="gallery-item">
          <img
            src="/src/assets/images/desktop/image-pocket-borealis.jpg"
            alt="pocket borealis"
          />
          <span>pocket borealis</span>
        </figure>
        <figure className="gallery-item">
          <img
            src="/src/assets/images/desktop/image-curiosity.jpg"
            alt="the curiosity"
          />
          <span>the curiosity</span>
        </figure>
        <figure className="gallery-item">
          <img
            src="/src/assets/images/desktop/image-fisheye.jpg"
            alt="fisheye"
          />
          <span>make it fisheye</span>
        </figure>
      </div>
    </section>
  );
};

export default Feature;
