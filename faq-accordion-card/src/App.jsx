function App() {
  return <main>
  <div class="container">
    <div class="bg-paterns">
    </div>
    <div class="card">
      <div class="card-header">
        <h1>FAQ</h1>
      </div>
      <div class="card-body">
        <div class="card-body-item">
          <h2 class="">How many team members can I invite?<span><img src="./images/icon-arrow-down.svg" alt="arrow image" class=""></span></h2>
          <div class="accordion-item">
            <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the
              Premium plan.</p>
          </div>
        </div>
        <div class="card-body-item">
          <h2 class="">What is the maximum file upload size?<span><img src="./images/icon-arrow-down.svg" alt="arrow image" class=""></span></h2>
          <div class="accordion-item">
            <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
          </div>
        </div>
        <div class="card-body-item">
          <h2>How do I reset my password?<span><img src="./images/icon-arrow-down.svg" alt="arrow image"></span></h2>
          <div class="accordion-item">
            <p>Click “Forgot password” from the login page “Change password” from your profile page. A reset link
              will be emailed to you.</p>
          </div>
        </div>
        <div class="card-body-item">
          <h2> Can I cancel my subscription? <span><img src="./images/icon-arrow-down.svg" alt="arrown image"></span>
          </h2>
            <div class="accordion-item">
              <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
            </div>
        </div>
        <div class="card-body-item">
          <h2>Do you provide additional support?<span><img src="./images/icon-arrow-down.svg" alt="arrown image"></span></h2>
          <div class="accordion-item">
            <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>;
}

export default App;
