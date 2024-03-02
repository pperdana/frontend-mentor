const Text = () => {
  return (
    <div className="article-content">
      <a href="#">
        <h3 className="article-title">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h3>
      </a>

      <p className="article-text">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>

      <div className="acticle-content-footer">
        <div className="author">
          <img
            src="./images/avatar-michelle.jpg"
            alt=""
            className="author-avater"
          />

          <div className="author-info">
            <a href="#">
              <h4 className="author-name">Michelle Appleton</h4>
            </a>
            <div className="publish-date">28 Jun 2020</div>
          </div>
        </div>

        <div className="share">
          <button className="share-button">
            <ion-icon
              name="arrow-redo"
              role="img"
              className="md hydrated"
              aria-label="arrow redo"
            ></ion-icon>
          </button>

          <div className="share-option">
            <span>Share</span>

            <a href="#">
              <ion-icon
                name="logo-facebook"
                role="img"
                className="md hydrated"
                aria-label="logo facebook"
              ></ion-icon>
            </a>
            <a href="#">
              <ion-icon
                name="logo-twitter"
                role="img"
                className="md hydrated"
                aria-label="logo twitter"
              ></ion-icon>
            </a>
            <a href="#">
              <ion-icon
                name="logo-pinterest"
                role="img"
                className="md hydrated"
                aria-label="logo pinterest"
              ></ion-icon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
