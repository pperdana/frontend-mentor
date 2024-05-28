import styled from "styled-components";

import Alert from "./Alert";
import Form from "./Form";

const App = () => {
  return (
    <Wrapper>
      <Alert />
      <Form />
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
