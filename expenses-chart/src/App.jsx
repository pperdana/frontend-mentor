import Graphic from "./Graphic";
import Balance from "./Balance";

import data from "./data";
import { useState } from "react";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <main>
      <Balance />
      <Graphic data={data} isActive={isActive} setIsActive={setIsActive} />
    </main>
  );
};

export default App;
