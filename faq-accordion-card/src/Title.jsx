import star from "./assets/icon-star.svg";

const Title = () => {
  return (
    <div className="faq-title flex">
      <img src={star} alt="star" />
      <h1>
        <span>faq</span>s
      </h1>
    </div>
  );
};

export default Title;
