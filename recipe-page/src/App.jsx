import Header from "./Header";
import Title from "./Title";
import Summary from "./Summary";
import Ingredients from "./Ingredients";
import Instructions from "./Instructions";
import Nutrition from "./Nutrition";

const App = () => {
  return (
    <>
      <Header />
      <main className="sm:px-[20px] sm:pb-[30px]">
        <Title />
        <Summary />

        <Ingredients />
        <hr />

        <Instructions />
        <hr />

        <Nutrition />
      </main>
    </>
  );
};

export default App;
