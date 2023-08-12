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
  return (
    <div className={read ? "card unread-card" : "card"}>
      <div className="card-about">
        <img className="image" src={src} alt={alt} />
        <div className="info">
          <div className="desc">
            <h2 className="name">{name}</h2> <p className="stats">{status}</p>{" "}
            {post && <strong className="post">{post}</strong>}
            {group && <strong className="group">{group}</strong>}
            {read && <span className={read ? "dot display-dot" : "dot"} />}
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
