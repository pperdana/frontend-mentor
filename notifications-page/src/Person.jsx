const Person = ({ post, group, name, status, id, sent, src, alt }) => {
  return (
    <div className="card">
      <img className="image" src={src} alt={alt} />
      <div className="info">
        <div className="desc">
          <h2 className="name">{name}</h2> <p className="stats">{status}</p>{" "}
          <strong>{post || group}</strong>
        </div>
        <div className="time">{sent}</div>
      </div>
    </div>
  );
};

export default Person;
