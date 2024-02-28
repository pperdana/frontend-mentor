import { useState } from "react";

import Submitted from "./Submitted";
import Card from "./Card";
import data from "./data";

const App = () => {
  const [listNum, setListNum] = useState(data);
  const [activeNum, setActiveNum] = useState(null);

  const submitRate = (id) => setActiveNum(id);

  console.log(activeNum);

  return (
    <main className="main">
      <Card
        listNum={listNum}
        activeNum={activeNum}
        setActiveNum={setActiveNum}
      />
      <Submitted />
    </main>
  );
};

export default App;
