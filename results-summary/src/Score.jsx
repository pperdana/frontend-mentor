const Score = ({ scores }) => {
  const { category, score, icon, alt, iconColor } = scores;

  return (
    <div className="score">
      <section className="icon">
        <img src={icon} alt={alt} />
        <p className={`reaction text-[${iconColor}]`}>{category}</p>
      </section>
      <section className="result">
        <strong className="font-bold">{score}</strong>
        <p>/&nbsp;100</p>
      </section>
    </div>
  );
};

export default Score;
