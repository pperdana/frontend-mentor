import Title from "./Title";
import Form from "./Form";
import Result from "./Result";

const App = () => {
  return (
    <main className="py-[4rem] px-[4.8rem] w-full max-w-[67rem] bg-[hsl(0,0%,100%)] m-[1.6rem] rounded-[2.4rem] rounded-br-[9.6rem] shadow-[1px_1px_12px_0px_rgba(20,20,20,0.11)]">
      <Title />
      <Form />
      <Result />
    </main>
  );
};

export default App;
