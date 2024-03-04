import avatar from "./assets/avatar-jessica.jpeg";

function App() {
  return (
    <main className="main">
      <div className="first">
        <img
          className="rounded-full w-[80px] mb-[2rem]"
          src={avatar}
          alt="avatar jessica"
        />
        <div className="semiFirst">
          <div className="bolded">Jessica Randall</div>
          <div className="yellow">London, United Kingdom</div>
        </div>
      </div>

      <div className="second">
        <p className="text-center text-white my-[.8rem]">
          &quot;Front-end developer and avid reader.&quot;
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
