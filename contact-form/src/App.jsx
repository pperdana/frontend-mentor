import styled from "styled-components";

import Alert from "./Alert";
import FormContainer from "./FormContainer";

const App = () => {
  return (
    <Wrapper>
      <Alert />
      <FormContainer />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 47em) {
    height: 100%;
    margin-block: 36px;
  }
`;
