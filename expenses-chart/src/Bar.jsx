const Bar = ({ day, amount, height }) => {
  return (
    <div className="bar-container">
      <span className="bar_value">{amount}</span>
      <div className="bar" style={{ height: `${height * 0.7}px` }}></div>
      <span className="bar_subtitle">{day}</span>
    </div>
  );
};

export default Bar;
