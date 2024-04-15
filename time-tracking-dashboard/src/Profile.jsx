const Profile = () => {
  return (
    <div className="card profile">
      <div className="content">
        <img src="./images/image-jeremy.png" alt="" />
        <div className="report">
          Report for <span className="user">Jeremy Robson</span>
        </div>
      </div>
      <div className="links">
        <a href="#">Daily</a>
        <a href="#" className="active">
          Weekly
        </a>
        <a href="#">Monthly</a>
      </div>
    </div>
  );
};

export default Profile;
