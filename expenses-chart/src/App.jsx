import Graphic from "./Graphic";
import Balance from "./Balance";

import data from "./data";

const App = () => {
  return (
    <main>
      <Balance />
      <Graphic data={data} />
    </main>
  );
};

export default App;
