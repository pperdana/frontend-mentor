import Person from "./Person";

import "./styles/List.scss";

const List = ({ people }) => {
  return (
    <div className="people">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default List;
