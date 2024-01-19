import illustration from "./assets/illustration-article.svg";
import avatar from "./assets/image-avatar.webp";

const App = () => {
  return (
    <main className="container max-w-[1440px] my-0 mx-auto h-[100vh] flex items-center	justify-center">
      <div className="card max-w-[385px] h-[520px] bg-white p-[25px] flex flex-col	rounded-[18px] border-[1px]	border-solid	border-[hsl(0,0%,7%)]	shadow-[10px_10px_hsl(0,0%,7%)]">
        <div className="card-img">
          <img src={illustration} alt="card image" />
        </div>

        <div className="card-info">
          <p className="card-type">Learning</p>
          <p className="card-date">Published 21 Dec 2023</p>

          <h1 className="card-title">HTML &amp; CSS foundations</h1>

          <p className="card-desc">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>

          <div className="card-profile">
            <div className="avatar">
              <img src={avatar} alt="avatar" className="avatar-img" />
            </div>
            <p className="avatar-name">Greg Hooper</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
