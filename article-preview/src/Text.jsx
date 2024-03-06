import michelleAvatar from "./assets/avatar-michelle.jpg";
import facebookIcon from "./assets/icon-facebook.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";
import twitterIcon from "./assets/icon-twitter.svg";

import { RiShareForwardFill } from "react-icons/ri";

const Text = ({ setIsHide, isHide }) => {
  return (
    <div className="article-content">
      <h1 className="article-title">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>

      <p className="article-text">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>

      <div className="acticle-content-footer">
        <div className="author">
          <img
            src={michelleAvatar}
            alt="avatar michelle"
            className="author-avater"
          />

          <div className="author-info">
            <a href="#">
              <h2 className="author-name">Michelle Appleton</h2>
            </a>
            <div className="publish-date">28 Jun 2020</div>
          </div>
        </div>

        <div className="share">
          <button className="share-button" onClick={() => setIsHide(!isHide)}>
            <RiShareForwardFill className="text-[2rem]" />
          </button>

          <div className={`share-option${isHide ? "" : " active"}`}>
            <span>Share</span>

            <a href="#">
              <img
                className="hydrated"
                src={facebookIcon}
                alt="logo-facebook"
              />
            </a>

            <a href="#">
              <img className="hydrated" src={twitterIcon} alt="logo-twitter" />
            </a>

            <a href="#">
              <img
                className="hydrated"
                src={pinterestIcon}
                alt="logo-pinterest"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Text;
