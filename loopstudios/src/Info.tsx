import imageInteractive from "./assets/images/desktop/image-interactive.jpg";

const Info = () => {
  return (
    <section className="page flex justify-center">
      <div className="wrapper max-w-[calc((1vh+1vw)*52.2)] w-full	py-0 px-[30px]">
        <div className="introduce mt-[calc((1vh+1vw)*7.1)] mb-[calc((1vh+1vw)*7.74)] pb-[calc((1vh+1vw)*4.6)]">
          <img
            src={imageInteractive}
            alt="image interactive"
            className="introduce__image absolute w-[calc((1vh+1vw)*34)]"
          />
          <div className="introduce__text top-[calc((1vh+1vw)*9)] left-[calc((1vh+1vw)*24)] relative py-[calc((1vh+1vw)*4.27)] pr-0 pl-[calc((1vh+1vw)*4.27)] w-[48%] bg-[hsl(0,0%,100%)]">
            <h2 className="introduce__heading text-[calc((1vh+1vw)*2.13)] leading-[1.1] font-['josefin-sans'] font-normal	uppercase">
              The leader in interactive VR
            </h2>
            <p className="introduce__paragraph font-['alata'] mt-[30px] leading-[1.5] text-[hsl(0,0%,55%)] text-[calc((1vh+1vw)*0.67)]">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
