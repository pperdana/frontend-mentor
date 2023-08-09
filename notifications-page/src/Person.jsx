const Person = ({ post, group, name, status, id, sent, src, alt, read }) => {
  const background = read && "hsl(210, 60%, 98%)";

  return (
    <div className="card" style={{ background: `${background}` }}>
      <img className="image" src={src} alt={alt} />
      <div className="info">
        <div className="desc">
          <h2 className="name">{name}</h2> <p className="stats">{status}</p>{" "}
          <strong>{post || group}</strong>
          <span className={read ? "dot display-dot" : "dot"}></span>
        </div>
        <div className="time">{sent}</div>
      </div>
    </div>
  );
};

export default Person;
