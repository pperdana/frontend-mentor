const Bar = ({ day, amount, height, isActive, setIsActive }) => {
  return (
    <div className="bar-container">
      <span className={`bar_value ${isActive ? "active-hover" : ""}`}>
        {amount}
      </span>
      <div
        className="bar"
        style={{ height: `${height * 0.7}px` }}
        onClick={() => setIsActive(!isActive)}
      ></div>
      <span className="bar_subtitle">{day}</span>
    </div>
  );
};

export default Bar;
