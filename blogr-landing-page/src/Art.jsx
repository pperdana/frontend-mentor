import styled from "styled-components";

import illPhones from "./assets/illustration-phones.svg";

const Art = () => {
  return (
    <Wrapper id="state-of-art">
      <div id="left">
        <img src={illPhones} alt="illustration-phones" />
      </div>
      <div id="right">
        <h3>State of the Art Infrastructure</h3>
        <p className="para">
          With reliability and speed in mind, worldwide data centers provide the
          backbone for ultra-fast connectivity. This ensures your site will load
          instantly, no matter where your readers are, keeping your site
          competitive.
        </p>
      </div>
    </Wrapper>
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
  background: url(src/assets/bg-pattern-circles.svg), var(--blogr-bg-gradient);

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
  #left > img {
    top: 50%;
    left: 64%;
    position: absolute;
    height: max(38vw, 20rem);
    transform: translate(-50%, -50%);
  }
  h3 {
    font-size: 4.2rem;
    color: var(--clr-neutral-white);
  }

  .para {
    width: 66%;
    color: var(--Grayish-blue-footer-txt);
  }
`;
