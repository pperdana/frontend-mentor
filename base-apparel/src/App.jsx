import LeftWrapper from "./LeftWrapper";
import RightWrapper from "./RightWrapper";

const App = () => {
  return (
    <main className="main flex mx-[7rem] justify-center tall:h-[900px] lg:mx-[2rem] lg:w-[400px]">
      <LeftWrapper />
      <RightWrapper />
    </main>
  );
};

export default App;
