import ellipsIcon from "./assets/icon-ellipsis.svg";

const Card = ({ item, title, timeframes, icon }) => {
  const { current, previous } = timeframes.weekly;
  const titleName = title.replaceAll(" ", "").toLowerCase();

  // console.log(item);

  return (
    <div className={`card ${titleName}`}>
      <div className="content">
        <h2>{title}</h2>
        <button className="ellipses">
          <img src={ellipsIcon} alt="ellipsis icon" />
        </button>
        <span className="current">{`${current}hrs`}</span>
        <span className="previous">
          Last <span>Week</span> - <span>{`${previous}hrs`}</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
