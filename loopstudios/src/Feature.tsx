const Feature = () => {
  return (
    <div className="page">
      <div className="wrapper">
        <div className="portfolio">
          <header className="portfolio__header">
            <h3 className="portfolio__heading">Our creations</h3>
            <button className="portfolio__button">See all</button>
          </header>
          <div className="gallery">
            <div className="card _earth">
              <div className="card__content">
                <h3 className="card__name">Deep earth</h3>
              </div>
            </div>
            <div className="card _arcade">
              <div className="card__content">
                <h3 className="card__name">Night arcade</h3>
              </div>
            </div>
            <div className="card _soccer">
              <div className="card__content">
                <h3 className="card__name">Soccer team VR</h3>
              </div>
            </div>
            <div className="card _grid">
              <div className="card__content">
                <h3 className="card__name">The grid</h3>
              </div>
            </div>
            <div className="card _vr">
              <div className="card__content">
                <h3 className="card__name">From up above VR</h3>
              </div>
            </div>
            <div className="card _borealis">
              <div className="card__content">
                <h3 className="card__name">Pocket borealis</h3>
              </div>
            </div>
            <div className="card _curiosity">
              <div className="card__content">
                <h3 className="card__name">The curiosity</h3>
              </div>
            </div>
            <div className="card _fisheye">
              <div className="card__content">
                <h3 className="card__name">Make it fisheye</h3>
              </div>
            </div>
            <button className="portfolio__button _mobile">See all</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
