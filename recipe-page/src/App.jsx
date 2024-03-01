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
      <div className="box-contents sm:px-[20px] sm:pb-[30px]">
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
