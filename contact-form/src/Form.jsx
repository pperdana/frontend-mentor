import styled from "styled-components";

const Form = () => {
  return (
    <Wrapper action="#" name="forms" id="form">
      <div className="input-group">
        <div className="row">
          <div className="form-control name">
            <label>First Name *</label>
            <input type="text" id="name" className="change" />
            <p id="nameError" className="error" />
          </div>
          <div className="form-control name">
            <label className="last">Last Name *</label>
            <input type="text" id="last_name" className="change" />
            <p id="lastnameError" className="error" />
          </div>
        </div>

        <div className="form-control">
          <label>Email Address *</label>
          <input type="text" id="email" className="change" />
          <p id="emailError" className="error" />
        </div>

        <div className="form-control">
          <p className="radio-query">Query Type *</p>
          <div className="inline">
            <div className="radio">
              <input type="radio" name="radio" id="small" />
              <label className="border">Gender Enquiry</label>
            </div>

            <div className="radio">
              <input type="radio" name="radio" id="large" />
              <label className="border">Support Request</label>
            </div>
          </div>

          <p id="Queryerror" className="error">
            Please select a query type
          </p>
        </div>

        <div className="form-control">
          <label>Message *</label> <br />
          <textarea name="message" id="message" rows="6" cols="75"></textarea>
          <p id="Messageerror" className="error" />
        </div>

        <div className="form-control check">
          <input type="checkbox" id="mycheck" name="checked" />
          <label>I consent to being contacted by the team *</label>
        </div>
        <p id="Checkerror" className="error">
          To submit this form,please consent to being contacted
        </p>
      </div>

      <button type="submit" id="btn" className="btn">
        Submit
      </button>
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.form`
  .row {
    display: flex;
    justify-content: space-between;
    gap: 1.6rem;
  }
  .check {
    margin-top: 25px;
    display: flex;
    gap: 20px;
  }
  .radio-query {
    font-size: 1.6rem;
  }
  .error {
    display: none;
  }
  .change {
    cursor: pointer;
    width: 100%;
    margin: 10px 0px;
    padding: 10px;
    border-radius: 5px;
    border: 1.5px solid hsl(186, 15%, 59%);
    outline: none;
  }
  .btn {
    margin-top: 30px;
    width: 108%;
    font-size: 1.9rem;
    background: hsl(169, 82%, 27%);
    color: #fff;
    font-weight: 500;
    height: 40px;
    border-radius: 5px;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
