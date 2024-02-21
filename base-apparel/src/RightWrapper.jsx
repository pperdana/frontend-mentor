import hero from "./assets/hero-desktop.jpg";

const RightWrapper = () => {
  return (
    <section className="right-wrapper">
      <img className="max-w-[100%] h-screen" src={hero} alt="hero desktop" />
    </section>
  );
};

export default RightWrapper;
