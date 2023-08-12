import Header from "./Header";
import List from "./List";
import "./styles/App.scss";

import { data } from "./data.js";
import { useState } from "react";

function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <Header setPeople={setPeople} />
        <List people={people} />
      </section>
    </main>
  );
}

export default App;
