import Questions from "./Questions";
import Title from "./Title";

function App() {
  return (
    <main className="min-h-screen	flex items-center	justify-center">
      <div className="card p-[1.5rem] shadow-[0px_30px_100px_-50px_black]">
        <Title />
        <Questions />
      </div>
    </main>
  );
}

export default App;
