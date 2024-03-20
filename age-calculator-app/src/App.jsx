import Title from "./Title";
import Form from "./Form";
import Result from "./Result";

const App = () => {
  return (
    <main className="py-[2.5rem] px-[3rem] w-full max-w-[42rem] bg-[hsl(0,0%,100%)] m-[1rem] rounded-[1.5rem] rounded-br-[6rem] shadow-[1px_1px_12px_0px_rgba(20,20,20,0.11)]">
      <Title />
      <Form />
      <Result />
    </main>
  );
};

export default App;
