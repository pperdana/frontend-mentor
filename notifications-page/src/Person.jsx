const Person = ({
  post,
  group,
  name,
  status,
  id,
  sent,
  src,
  alt,
  read,
  message,
  picture,
}) => {
  const background = read && "hsl(210, 60%, 98%)";

  return (
    <div className="card" style={{ background: `${background}` }}>
      <div className="card-about">
        <img className="image" src={src} alt={alt} />
        <div className="info">
          <div className="desc">
            <h2 className="name">{name}</h2> <p className="stats">{status}</p>{" "}
            <strong>{post || group}</strong>
            <span className={read ? "dot display-dot" : "dot"}></span>
          </div>
          <div className="time">{sent}</div>
          {message && <p className="message">{message}</p>}
        </div>{" "}
      </div>

      {picture && <img className="picture-send" src={picture} alt="chess" />}
    </div>
  );
};

export default Person;
