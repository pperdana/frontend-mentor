const App = () => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src="/assets/images/illustration-article.svg" alt="card image" />
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
              <img
                src="/assets/images/image-avatar.webp"
                alt="avatar"
                className="avatar-img"
              />
            </div>
            <p className="avatar-name">Greg Hooper</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
