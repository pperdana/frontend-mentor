import styled from "styled-components";

import Design from "./Design";
import Art from "./Art";
import About from "./About";

const Content = () => {
  return (
    <Wrapper>
      <Design />
      <Art />
      <About />
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.main`
  display: flex;
  overflow: hidden;
  flex-direction: column;

  #main-txt-img #right img {
    width: max(66vw, 75%);
    transform: translate(3dvw, -7.8dvw);
  }

  .desktop {
    display: block;
  }
`;
