import deepEarth from "./assets/images/desktop/image-deep-earth.jpg";

const Feature = () => {
  return (
    <div className="page flex justify-center">
      <div className="wrapper max-w-[calc((1vh+1vw)*52.2)] w-full py-0 px-[30px]">
        <div className="portfolio">
          <header className="portfolio__header flex justify-between	items-center	mb-[calc((1vh+1vw)*4)]">
            <h3 className="portfolio__heading text-[calc((1vh+1vw)*2.13)] leading-[1.1] font-josefin font-[300]	uppercase">
              Our creations
            </h3>
            <button className="portfolio__button bg-[hsl(0,0%,100%)] text-[hsl(0,0%,0%)] border-[1px] border-solid	border-[hsl(0,0%,0%)] uppercase py-[10px] px-[30px] font-[calc((1vh+1vw)*0.67)] leading-[1] font-alata font-normal tracking-[2px] duration-[400ms]">
              See all
            </button>
          </header>
          <div className="gallery flex flex-wrap	justify-between	gap-[calc((1vh+1vw)*1.2)] mb-[calc((1vh+1vw)*8)]">
            <div className="bg_gallery bg-earth">
              <div className="card__content">
                <h3 className="card__name">Deep earth</h3>
              </div>
            </div>
            <div className="bg_gallery bg-arcade">
              <div className="card__content">
                <h3 className="card__name">Night arcade</h3>
              </div>
            </div>
            <div className="bg_gallery bg-soccer">
              <div className="card__content">
                <h3 className="card__name">Soccer team VR</h3>
              </div>
            </div>
            <div className="bg_gallery bg-grid">
              <div className="card__content">
                <h3 className="card__name">The grid</h3>
              </div>
            </div>
            <div className="bg_gallery bg-above">
              <div className="card__content">
                <h3 className="card__name">From up above VR</h3>
              </div>
            </div>
            <div className="bg_gallery bg-borealis">
              <div className="card__content">
                <h3 className="card__name">Pocket borealis</h3>
              </div>
            </div>
            <div className="bg_gallery bg-curiosity">
              <div className="card__content">
                <h3 className="card__name">The curiosity</h3>
              </div>
            </div>
            <div className="bg_gallery bg-fisheye">
              <div className="card__content">
                <h3 className="card__name">Make it fisheye</h3>
              </div>
            </div>
            <button className="portfolio__button _mobile hidden ">
              See all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
