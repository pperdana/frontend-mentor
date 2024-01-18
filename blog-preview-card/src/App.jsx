const App = () => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src="/assets/images/illustration-article.svg" alt="card image" />
        </div>
        <div className="card-tittle">
          <p>Learning</p>
        </div>
        <div className="card-date">
          <p>Published 21 Dec 2023</p>
        </div>
        <div className="card-subtittle">
          <h1>HTML &amp; CSS foundations</h1>
        </div>
        <div className="card-text">
          <p>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="card-profile">
          <div className="avatar">
            <img
              src="/assets/images/image-avatar.webp"
              alt="avatar"
              className="avatar-img"
            />
          </div>
          <p className="avatar-name">Greg Hooper</p>
        </div>
      </div>
    </>
  );
};

export default App;
