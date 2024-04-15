const Card = ({ item, title, timeframes }) => {
  const { current, previous } = timeframes.weekly;
  console.log(current, previous);
  return (
    <div className={`card ${title}`}>
      <div className="content">
        <h2>{title}</h2>
        <button className="ellipses">
          <img src="./images/icon-ellipsis.svg" alt="" />
        </button>
        <span className="current">32hrs</span>
        <span className="previous">
          Last <span>Week</span> - <span>36hrs</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
