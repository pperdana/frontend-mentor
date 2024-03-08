const GraphInfo = () => {
  return (
    <div className="graphic_info">
      <div className="graphic_info-left">
        <h2 className="month_caption">Total this month</h2>
        <span className="month_value"> $478.33</span>
      </div>
      <div className="graphic_info-rigth">
        <span className="percentage_value">+2.4%</span>
        <p className="percentage_paragraph"> from last month</p>
      </div>
    </div>
  );
};

export default GraphInfo;
