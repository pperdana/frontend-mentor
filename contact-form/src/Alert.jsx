import styled from "styled-components";

const Alert = () => {
  return (
    <>
      <Wrapper className="alert">
        <i className="fa-regular fa-circle-check">
          <span className="msg">Message Sent!</span>
        </i>
        <h4>Thanks for completing the form. We'll be in touch soon!</h4>
      </Wrapper>
    </>
  );
};

export default Alert;

const Wrapper = styled.div`
  display: none;
  .fa-regular,
  .far {
    font-weight: 400;
  }
`;
