import CardList from "./CardList";

import data from "./data.js";

const App = () => {
  return (
    <>
      <main className="main">
        <CardList data={data} />
      </main>
    </>
  );
};

export default App;
