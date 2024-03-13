import GraphTitle from "./GraphTitle";
import GraphInfo from "./GraphInfo";
import GraphContainer from "./GraphContainer";

const Graphic = ({ data }) => {
  return (
    <section className="spending-graphic">
      <GraphTitle />
      <GraphContainer data={data} />
      <GraphInfo />
    </section>
  );
};

export default Graphic;
