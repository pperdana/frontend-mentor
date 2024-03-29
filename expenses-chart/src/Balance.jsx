import logo from "./assets/logo.svg";

const Balance = () => {
  return (
    <section className="balance">
      <h2 className="balance_caption">My balance</h2>
      <span className="balance_value">$921.48</span>
      <img src={logo} alt="Logo" className="logo" />
    </section>
  );
};

export default Balance;
