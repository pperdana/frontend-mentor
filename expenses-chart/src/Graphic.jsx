import GraphTitle from "./GraphTitle";
import GraphInfo from "./GraphInfo";
import GraphContainer from "./GraphContainer";

const Graphic = ({ data, isActive, setIsActive }) => {
  return (
    <section className="spending-graphic">
      <GraphTitle />
      <GraphContainer
        data={data}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <GraphInfo />
    </section>
  );
};

export default Graphic;
