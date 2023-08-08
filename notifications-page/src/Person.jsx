const Person = ({ name, status, id, posted, src, alt }) => {
  return (
    <div className="card">
      <img className="image" src={src} alt={alt} />
      <div className="info">
        <div className="desc">
          <h2 className="name">{name}</h2> <p className="stats">{status}</p>
        </div>
        <div className="time">{posted}</div>
      </div>
    </div>
  );
};

export default Person;
