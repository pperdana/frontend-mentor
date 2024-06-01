const Content = ({ monthly }) => {
  return (
    <div className="grid_content">
      <div className="content">
        <div className="first">
          <span className="head">Basic</span>

          <div className="price">
            <span className="dollar_sign">$</span>
            <span className="big_price">{monthly ? 19.99 : 199.99}</span>
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
            <span className="big_price">{monthly ? 24.99 : 249.99}</span>
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
            <span className="big_price">{monthly ? 39.99 : 399.99}</span>
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
  );
};

export default Content;
