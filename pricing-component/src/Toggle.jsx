const Toggle = ({ monthly, setMonthly }) => {
  return (
    <div className="toggle_div">
      <span className="annually">Annually</span>
      <div className="toogle_btn" onClick={() => setMonthly(!monthly)}>
        <div className={`toggle ${monthly ? "" : "active"}`} />
      </div>
      <span className="month">Monthly</span>
    </div>
  );
};

export default Toggle;
