import Person from "./Person";
import { people } from "./data.js";

import "./styles/List.scss";

const List = () => {
  return (
    <div className="people">
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

export default List;
