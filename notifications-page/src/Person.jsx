const Person = ({ name, status, id, posted }) => {
  return (
    <div className="card">
      <div className="desc">
        {name} {status}
      </div>
      <div className="time">{posted}</div>
    </div>
  );
};

export default Person;
