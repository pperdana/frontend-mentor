import productiveImg from "./assets/illustration-stay-productive.png";

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
          <svg
            className="icon"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <defs>
              <circle id="b" cx="6" cy="6" r="6"></circle>
              <filter
                x="-25%"
                y="-25%"
                width="150%"
                height="150%"
                filterUnits="objectBoundingBox"
                id="a"
              >
                <feOffset
                  in="SourceAlpha"
                  result="shadowOffsetOuter1"
                ></feOffset>
                <feGaussianBlur
                  stdDeviation="1"
                  in="shadowOffsetOuter1"
                  result="shadowBlurOuter1"
                ></feGaussianBlur>
                <feColorMatrix
                  values="0 0 0 0 0.384313725 0 0 0 0 0.878431373 0 0 0 0 0.850980392 0 0 0 0.811141304 0"
                  in="shadowBlurOuter1"
                ></feColorMatrix>
              </filter>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <g transform="translate(2 2)">
                <use fill="#000" filter="url(#a)" xlink:href="#b"></use>
                <use
                  className="circle-hover"
                  fill="#62E0D9"
                  xlink:href="#b"
                ></use>
              </g>
              <path
                d="M8.582 6l-.363.35 1.452 1.4H5.333v.5h4.338L8.22 9.65l.363.35 2.074-2z"
                fill="#1B2330"
              ></path>
            </g>
          </svg>
        </a>
      </main>
    </section>
  );
};

export default Info;
