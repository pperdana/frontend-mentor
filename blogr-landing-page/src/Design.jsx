import styled from "styled-components";

const Design = () => {
  return (
    <Wrapper id="Design">
      <h2 className="heading">Designed for the future</h2>
      <div id="main-txt-img">
        <div id="left">
          <div id="editor">
            <h3>Introducing an extensible editor</h3>
            <p className="para">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div id="management">
            <h3>Robust content management</h3>
            <p className="para">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </p>
          </div>
        </div>
        <div id="right">
          <img
            className="desktop"
            src="./images/illustration-editor-desktop.svg"
            alt="desktop"
          />
          <img
            className="mobile"
            src="./images/illustration-editor-mobile.svg"
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Design;

const Wrapper = styled.div`
  margin-block: max(3vw, 1rem) 0;

  h2 {
    font-weight: 500;
    text-align: center;
    margin-block: 13vh 0;
    font-family: var(--Ubuntu);
    font-size: max(2.8dvw, 1.45rem);
    color: var(--Very-dark-blue-heading);
  }

  #main-txt-img {
    width: 100%;
    display: flex;
  }
  #main-txt-img #left {
    width: 50%;
    margin-top: 10dvw;
    padding-left: 10vw;
  }
  #editor {
    margin-block: 1dvh max(5dvw, 3rem);
  }
  h3 {
    font-weight: 500;
    font-size: 1.6rem;
    margin-bottom: 6vh;
    font-family: var(--Ubuntu);
    color: var(--Very-dark-blue-heading);
  }
  #editor .para {
    width: 83.9%;
  }
  #main-txt-img #right {
    width: 50%;
  }
  #management .para {
    width: 82%;
  }
`;
