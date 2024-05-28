const Form = () => {
  return (
    <form action="#" name="forms" id="form">
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
          <p>Query Type *</p>
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

      <button type="submit" id="btn">
        Submit
      </button>
    </form>
  );
};

export default Form;
