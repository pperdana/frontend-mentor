const Bar = ({ day, amount }) => {
  return (
    <div className="bar-container">
      <span className="bar_value">{amount}</span>
      <div className="bar"></div>
      <span className="bar_subtitle">{day}</span>
    </div>
  );
};

export default Bar;
