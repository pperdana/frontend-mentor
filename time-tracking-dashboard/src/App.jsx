import { useState } from "react";
import CardList from "./CardList";

import data from "./data.js";

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  console.log(data);
  const [timeFrame, setTimeFrame] = useState();
  return (
    <>
      <main className="main">
        <CardList data={menuItems} />
      </main>
    </>
  );
};

export default App;
