import Header from "./Header";
import Title from "./Title";
import Summary from "./Summary";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

const App = () => {
  return (
    <main className="wp">
      <Header />
      <div className="box-contents">
        <Title />
        <Summary />
        <Ingredients />
        <hr />
        <Instructions />
        <hr />
        <Nutrition />
      </div>
    </main>
  );
};

export default App;
