const Rate = ({ id, num, activeNum, setActiveNum }) => {
  const isActive = id === activeNum;

  return (
    <div
      className={`rate-num ${isActive ? "active" : ""}`}
      onClick={() => setActiveNum(num)}
    >
      {num}
    </div>
  );
};

export default Rate;
