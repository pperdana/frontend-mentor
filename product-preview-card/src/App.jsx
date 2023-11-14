import TextArea from "./TextArea";
import Image from "./Image";

function App() {
  return (
    <main className="card bg-white flex justify-center	max-w-[536px] max-h-[804px] rounded-[10px] overflow-hidden lg:max-w-[495px] md:flex-col md:max-w-[350px] sm:max-w-[300px]">
      <Image />
      <TextArea />
    </main>
  );
}

export default App;
