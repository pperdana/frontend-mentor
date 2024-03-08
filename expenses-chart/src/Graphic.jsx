import GraphInfo from "./GraphInfo";
import GraphContainer from "./GraphContainer";

const Graphic = () => {
  return (
    <section className="spending-graphic">
      <h1>Spending - Last 7 days</h1>
      <GraphContainer />
      <GraphInfo />
    </section>
  );
};

export default Graphic;
