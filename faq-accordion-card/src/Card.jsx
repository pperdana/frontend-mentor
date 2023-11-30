const Card = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h1>FAQ</h1>
      </div>
      <div className="card-body">
        <div className="card-body-item">
          <h2 className="">
            How many team members can I invite?
            <span>
              <img
                src="./images/icon-arrow-down.svg"
                alt="arrow image"
                className=""
              />
            </span>
          </h2>
          <div className="accordion-item">
            <p>
              You can invite up to 2 additional users on the Free plan. There is
              no limit on team members for the Premium plan.
            </p>
          </div>
        </div>
        <div className="card-body-item">
          <h2 className="">
            What is the maximum file upload size?
            <span>
              <img
                src="./images/icon-arrow-down.svg"
                alt="arrow image"
                className=""
              />
            </span>
          </h2>
          <div className="accordion-item">
            <p>
              No more than 2GB. All files in your account must fit your allotted
              storage space.
            </p>
          </div>
        </div>
        <div className="card-body-item">
          <h2>
            How do I reset my password?
            <span>
              <img src="./images/icon-arrow-down.svg" alt="arrow image" />
            </span>
          </h2>
          <div className="accordion-item">
            <p>
              Click “Forgot password” from the login page “Change password” from
              your profile page. A reset link will be emailed to you.
            </p>
          </div>
        </div>
        <div className="card-body-item">
          <h2>
            Can I cancel my subscription?{" "}
            <span>
              <img src="./images/icon-arrow-down.svg" alt="arrown image" />
            </span>
          </h2>
          <div className="accordion-item">
            <p>
              Yes! Send us a message and we’ll process your request no questions
              asked.
            </p>
          </div>
        </div>
        <div className="card-body-item">
          <h2>
            Do you provide additional support?
            <span>
              <img src="./images/icon-arrow-down.svg" alt="arrown image" />
            </span>
          </h2>
          <div className="accordion-item">
            <p>
              Chat and email support is available 24/7. Phone lines are open
              during normal business hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
