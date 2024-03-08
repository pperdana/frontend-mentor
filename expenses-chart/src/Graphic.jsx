const Graphic = () => {
  return (
    <section className="spending-graphic">
      <h1>Spending - Last 7 days</h1>
      <div className="graphic_container">
        <div className="bar-container">
          <span className="bar_value">$17.45</span>
          <div className="bar"></div>
          <span className="bar_subtitle">mon</span>
        </div>
        <div className="bar-container">
          <span className="bar_value">$34.91</span>
          <div className="bar"></div>
          <span className="bar_subtitle">tue</span>
        </div>
        <div className="bar-container">
          <span className="bar_value">$52.36</span>
          <div className="bar"></div>
          <span className="bar_subtitle">wed</span>
        </div>
        <div className="bar-container">
          <span className="bar_value">$31.07</span>
          <div className="bar"></div>
          <span className="bar_subtitle">thu</span>
        </div>
        <div className="bar-container">
          <span className="bar_value">$23.39</span>
          <div className="bar"></div>
          <span className="bar_subtitle">fri</span>
        </div>
        <div className="bar-container">
          <span className="bar_value">$43.28</span>
          <div className="bar"></div>
          <span className="bar_subtitle">sat</span>
        </div>
        <div className="bar-container">
          <span className="bar_value">$25.48</span>
          <div className="bar"></div>
          <span className="bar_subtitle">sun</span>
        </div>
      </div>
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
    </section>
  );
};

export default Graphic;
