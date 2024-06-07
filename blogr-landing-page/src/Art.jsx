import styled from "styled-components";
const Art = () => {
  return (
    <div id="state-of-art">
      <div id="left">
        <img src="./images/illustration-phones.svg" alt="illustration-phones" />
      </div>
      <div id="right">
        <h3>State of the Art Infrastructure</h3>
        <div className="para">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </div>
      </div>
    </div>
  );
};

export default Art;

const Wrapper = styled.div`
  display: flex;
  column-gap: 7.5vw;
  padding-block: 18dvh;
  border-radius: 0 5.5rem;
  background-repeat: no-repeat;
  background-position: -44% 88%;
  background: url(./images/bg-pattern-circles.svg), var(--blogr-bg-gradient);
  #left {
    width: 40%;
    position: relative;
  }
  #right {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
