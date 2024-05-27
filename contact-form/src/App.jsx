import  Alert  from './Alert';

const App = () => {
  return (
    <>
      <Alert     />
  
      <div id="form-container">
      <div class="form-box">
        <h1>Contact Us</h1>
        <form action="#" name="forms" id="form">
          <div class="input-group">
            <div class="row">
              <div class="form-control name">
                <label for="name">First Name *</label>
                <input type="text" id="name" class="change">
                <p id="nameError" class="error"></p>
              </div>
              <div class="form-control name">
                <label for="last_name" class="last">Last Name *</label>
                <input type="text" id="last_name" class="change">
                <p id="lastnameError" class="error"></p>
              </div>
            </div>
            

            <div class="form-control">
              <label for="email">Email Address *</label>
              <input type="text" id="email" class="change">
              <p id="emailError" class="error"></p>
            </div>

            <div class="form-control">
              <p>Query Type *</p>
              <div class="inline">
                <div class="radio">
                  <input type="radio" name="radio" id="small">
                  <label for="small" class="border">Gender Enquiry</label>
                </div>
                
                <div class="radio">
                  <input type="radio" name="radio" id="large">
                  <label for="large" class="border">Support Request</label>
                </div>
                
              </div>
              
              <p id="Queryerror" class="error" style="display: none">
                Please select a query type
              </p>
            </div>

            <div class="form-control">
              <label for="message">Message *</label> <br>
              <textarea name="message" id="message" rows="6" cols="75"></textarea>
              <p id="Messageerror" class="error"></p>
            </div>

            <div class="form-control check">
              <input type="checkbox" id="mycheck" name="checked">
              <label for="mycheck">I consent to being contacted by the team *</label>
            </div>
            <p id="Checkerror" class="error" style="display: none">
              To submit this form,please consent to being contacted
            </p>
          </div>
          

          <button type="submit" id="btn">Submit</button>
        </form>
      </div>
      
    </div>
    </>
  );
};

export default App;
