import avatar from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <main className="container">
      <div className="first">
        <img
          className="rounded-full w-[80px]"
          src={avatar}
          alt="avatar jessica"
        />
        <div className="semiFirst">
          <div className="bolded">Jessica Randall</div>
          <div className="yellow">London, United Kingdom</div>
        </div>
      </div>

      <div className="second">
        <p className="text-center text-white">
          Front-end developer and avid reader.
        </p>
      </div>
      <button className="btn">Github</button>
      <button className="btn">Frontend Mentor</button>
      <button className="btn">LinkedIn</button>
      <button className="btn">Twitter</button>
      <button className="btn">Instagram</button>
    </main>
  );
}

export default App;
