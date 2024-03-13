import Bar from "./Bar";

const GraphContainer = ({ data }) => {
  return (
    <div className="graphic_container">
      {data.map((item) => {
        return <Bar key={item.day} {...item} />;
      })}
    </div>
  );
};

export default GraphContainer;
