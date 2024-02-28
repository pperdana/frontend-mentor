import { useState } from "react";

import Submitted from "./Submitted";
import Card from "./Card";
import data from "./data";

const App = () => {
  const [listNum, setListNum] = useState(data);

  return (
    <main className="main">
      <Card listNum={listNum} setListNum={setListNum} />
      <Submitted />
    </main>
  );
};

export default App;
