import "./styles/Header.scss";
import { upData } from "./data.js";

const Header = ({ setPeople }) => {
  return (
    <div className="header">
      <h1>
        Notifications <span>3</span>
      </h1>
      <span onClick={() => setPeople(upData)}>Mark all as read</span>
    </div>
  );
};

export default Header;
