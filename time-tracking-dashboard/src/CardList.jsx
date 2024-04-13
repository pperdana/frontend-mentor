import Card from "./Card";

const CardList = ({ data }) => {
  // console.log(data);
  return (
    <div className="cards">
      <p>test</p>
      {data.map((item) => {
        return <Card key={item.title} item={item} {...item} />;
      })}

      {/* 
    <div className="card profile">
     <div className="content">
       <img src="./images/image-jeremy.png" alt="" />
       <div className="report">
         Report for <span className="user">Jeremy Robson</span>
       </div>
     </div>
     <div className="links">
       <a href="#">Daily</a>
       <a href="#" className="active">
         Weekly
       </a>
       <a href="#">Monthly</a>
     </div>
    </div>
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
    <div className="card exercise">
     <div className="content">
       <h2>Exercise</h2>
       <button className="ellipses">
         <img src="./images/icon-ellipsis.svg" alt="" />
       </button>
       <span className="current">4hrs</span>
       <span className="previous">
         Last <span>Week</span> - <span>5hrs</span>
       </span>
     </div>
    </div>
    <div className="card play">
     <div className="content">
       <h2>Play</h2>
       <button className="ellipses">
         <img src="./images/icon-ellipsis.svg" alt="" />
       </button>
       <span className="current">10hrs</span>
       <span className="previous">
         Last <span>Week</span> - <span>8hrs</span>
       </span>
     </div>
    </div>
    <div className="card social">
     <div className="content">
       <h2>Social</h2>
       <button className="ellipses">
         <img src="./images/icon-ellipsis.svg" alt="" />
       </button>
       <span className="current">5hrs</span>
       <span className="previous">
         Last <span>Week</span> - <span>10hrs</span>
       </span>
     </div>
    </div>
    <div className="card study">
     <div className="content">
       <h2>Study</h2>
       <button className="ellipses">
         <img src="./images/icon-ellipsis.svg" alt="" />
       </button>
       <span className="current">4hrs</span>
       <span className="previous">
         Last <span>Week</span> - <span>7hrs</span>
       </span>
     </div>
    </div>
    <div className="card selfcare">
     <div className="content">
       <h2>Self Care</h2>
       <button className="ellipses">
         <img src="./images/icon-ellipsis.svg" alt="" />
       </button>
       <span className="current">2hrs</span>
       <span className="previous">
         Last<span>Week</span> - <span>2hrs</span>
       </span>
     </div>
    </div>
    */}
    </div>
  );
};

export default CardList;
