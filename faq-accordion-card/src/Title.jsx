import star from "./assets/icon-star.svg";

const Title = () => {
  return (
    <div className="faq-title flex items-center gap-[1.5rem]">
      <img src={star} alt="star" />
      <h1 className="text-[3.5rem] font-black">
        <span className="uppercase">faq</span>s
      </h1>
    </div>
  );
};

export default Title;
