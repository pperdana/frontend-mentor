import Profile from "./Profile";
import Card from "./Card";

const CardList = ({ data }) => {
  // console.log(data);
  return (
    <div className="cards">
      <Profile />
      {data.map((item) => {
        return <Card key={item.title} item={item} {...item} />;
      })}
    </div>
  );
};

export default CardList;
