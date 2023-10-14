import Contact from "./Contact";
import Hero from "./Hero";

import logo from "./images/logo.svg";

function App() {
  return (
    <>
      <header className="header">
        <img src={logo} alt="Huddle Logo" className="logo" />
      </header>

      <main>
        <Hero />
        <Contact />
      </main>
    </>
  );
}

export default App;
