import Person from "./Person";
import data from "./data";

const List = () => {
  return (
    <div className="people">
      {data.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default List;
