import imageInteractive from "./assets/images/desktop/image-interactive.jpg";

const Info = () => {
  return (
    <div className="page flex justify-center">
      <div className="wrapper max-w-[1200px] w-full	py-0 px-[30px]">
        <div className="introduce my-[100px]">
          <img
            src={imageInteractive}
            alt="image interactive"
            className="introduce__image absolute w-[511px]"
          />
          <div className="introduce__text relative top-[135px] py-[60px] w-[48%]">
            <h2 className="introduce__heading">The leader in interactive VR</h2>
            <p className="introduce__paragraph">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
