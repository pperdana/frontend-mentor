import Score from "./Score";
import data from "./data";

const Summary = () => {
  console.log(data);
  return (
    <section className="summary">
      <h1 className="text-[hsl(224,30%,27%)] text-[1.5rem] mb-[2rem] font-bold">
        Summary
      </h1>

      {data.map((scores) => {
        return <Score scores={scores} key={scores.category} />;
      })}

      <button className="btn">Continue</button>
    </section>
  );
};

export default Summary;
