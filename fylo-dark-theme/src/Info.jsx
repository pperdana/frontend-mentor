import productiveImg from "./assets/illustration-stay-productive.png";
import arrowIcon from "./assets/icon-arrow.svg";

const Info = () => {
  return (
    <section className="section-3 section-info">
      <img src={productiveImg} alt="illustration-stay-productive" />
      <main>
        <h3>Stay productive, wherever you are</h3>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a className="cta-1" href="#">
          See how Fylo works
          <img src={arrowIcon} alt="Icon arrow" className="arrow-icon" />
        </a>
      </main>
    </section>
  );
};

export default Info;
