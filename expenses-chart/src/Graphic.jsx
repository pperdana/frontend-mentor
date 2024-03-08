import GraphTitle from "./GraphTitle";
import GraphInfo from "./GraphInfo";
import GraphContainer from "./GraphContainer";

const Graphic = () => {
  return (
    <section className="spending-graphic">
      <GraphTitle />
      <GraphContainer />
      <GraphInfo />
    </section>
  );
};

export default Graphic;
