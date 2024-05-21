const App = () => {
  return (
    <main>
      <div className="main_content">
        <h2>our pricing</h2>

        <div className="toggle_div">
          <span className="annually">Annually</span>
          <div className="toogle_btn">
            <div className="toggle"></div>
          </div>
          <span className="month">Monthly</span>
        </div>

        <div className="grid_content">
          <div className="content">
            <div className="first">
              <span className="head">Basic</span>

              <div className="price">
                <span className="dollar_sign">$</span>
                <span className="big_price">19.99</span>
              </div>

              <ul>
                <li>500 GB Storage</li>
                <li>2 Users Allowed</li>
                <li>Send up to 3 GB</li>
              </ul>

              <div className="btn">
                <button className="btn_learn">learn more</button>
              </div>
            </div>
            <div className="first middle">
              <span className="head">Professional</span>

              <div className="price">
                <span className="dollar_sign">$</span>
                <span className="big_price">24.99</span>
              </div>

              <ul>
                <li>1 TB Storage</li>
                <li>5 Users Allowed</li>
                <li>Send up to 10 GB</li>
              </ul>

              <div className="btn">
                <button className="btn_learn">learn more</button>
              </div>
            </div>
            <div className="first">
              <span className="head">Master</span>

              <div className="price">
                <span className="dollar_sign">$</span>
                <span className="big_price">39.99</span>
              </div>

              <ul>
                <li>2 TB Storage</li>
                <li>10 Users Allowed</li>
                <li>Send up to 20 GB</li>
              </ul>

              <div className="btn">
                <button className="btn_learn">learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
