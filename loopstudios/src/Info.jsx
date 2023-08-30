const Info = () => {
  return (
    <section className="section-info">
      <div className="info">
        <div className="info-text-box">
          <h1 className="heading-primary">The leader in interactive VR</h1>
          <p className="info-description">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>

        <div className="info-img-box">
          <img
            src="/src/assets/images/desktop/image-interactive.jpg"
            className="info-img"
            alt="Man playing game using VR"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
