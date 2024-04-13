const Card = (item) => {
  console.log(item);
  return (
    <div className="card work">
      <div className="content">
        <h2>Work</h2>
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
