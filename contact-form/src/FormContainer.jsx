import styled from "styled-components";

import Form from "./Form";

const FormContainer = () => {
  return (
    <Wrapper className="form-container">
      <div className="form-box">
        <h1>Contact Us</h1>
        <Form />
      </div>
    </Wrapper>
  );
};

export default FormContainer;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;

  .form-box {
    width: 90%;
    min-width: 650px;
    background-color: white;
    padding: 55px;
    border-radius: 10px;
  }

  h1 {
    color: hsl(187, 24%, 22%);
    margin-bottom: 15px;
  }
`;
