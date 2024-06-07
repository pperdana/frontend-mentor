import styled from "styled-components";
const About = () => {
  return (
    <Wrapper id="about-blogr">
      <div id="left">
        <img
          className="laptop-desktop desktop"
          src="./images/illustration-laptop-desktop.svg"
          alt="laptop-desktop"
        />
        <img
          className="laptop-mobile mobile"
          src="./images/illustration-laptop-mobile.svg"
          alt="laptop-mobile"
        />
      </div>
      <div id="right">
        <div id="simple">
          <h3>Free, open, simple</h3>
          <div className="para">
            Blogr is a free and open source applicaiton backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analystics. The architecture is clean and is relatively easy to
            learn.
          </div>
        </div>
        <div id="powerful-tool">
          <h3>Powerful tooling</h3>
          <div className="para">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  margin-block: 0 10dvh;

  #left {
    width: 50%;
    height: 100%;
    margin-top: 20dvh;
  }

  #right {
    width: 50%;
    display: flex;
    padding-top: 18dvh;
    flex-direction: column;
    justify-content: center;
  }
`;
