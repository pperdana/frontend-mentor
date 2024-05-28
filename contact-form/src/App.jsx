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
  background-color: hsl(148, 38%, 91%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
