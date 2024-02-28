import Rate from "./Rate";
import starIcon from "./assets/icon-star.svg";

const Card = ({ listNum }) => {
  return (
    <section className="card-section">
      <div className="star-icon">
        <img
          className="w-[17px] h-[17px] max-w-none"
          src={starIcon}
          alt="Icon Star"
        />
      </div>
      <h1 className="title">How did we do?</h1>
      <p className="text mb-[1.6rem]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rate">
        {listNum.map((item) => {
          return <Rate key={item.id} {...item} />;
        })}
      </div>

      <button className="btn">SUBMIT</button>
    </section>
  );
};

export default Card;
