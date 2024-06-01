import { useState } from "react";

import Title from "./Title";
import Toggle from "./Toggle";
import Content from "./Content";

const App = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <main>
      <div className="main_content">
        <Title />
        <Toggle monthly={monthly} setMonthly={setMonthly} />
        <Content monthly={monthly} />
      </div>
    </main>
  );
};

export default App;
