import Profile from "./Profile";
import Card from "./Card";

const CardList = ({ data, timeFrame, setTimeFrame }) => {
  return (
    <div className="cards">
      <Profile timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
      {data.map((item) => {
        return (
          <Card key={item.title} item={item} {...item} activeTime={timeFrame} />
        );
      })}
    </div>
  );
};

export default CardList;
