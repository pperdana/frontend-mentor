const Card = ({ item, title, timeframes, icon }) => {
  const { current, previous } = timeframes.weekly;
  console.log(item);
  return (
    <div className={`card ${title.toLowerCase()}`}>
      <div className="content">
        <h2>{title}</h2>
        <button className="ellipses">
          <img src={icon} alt="icon" />
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
