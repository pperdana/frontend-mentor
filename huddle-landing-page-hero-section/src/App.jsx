import Header from "./Header";
import Contact from "./Contact";
import Hero from "./Hero";

function App() {
  return (
    <>
      <Header />
      <main className="md:pb-[2rem]">
        <Hero />
        <Contact />
      </main>
    </>
  );
}

export default App;
