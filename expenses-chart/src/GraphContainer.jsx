import Bar from "./Bar";

const GraphContainer = ({ data, isActive, setIsActive }) => {
  return (
    <div className="graphic_container">
      {data.map((item) => {
        return (
          <Bar
            key={item.day}
            {...item}
            isActive={isActive}
            setIsActive={setIsActive}
          />
        );
      })}
    </div>
  );
};

export default GraphContainer;
