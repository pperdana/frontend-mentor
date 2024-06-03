import profile from "./assets/image-jeremy.png";
const Profile = ({ timeFrame, setTimeFrame }) => {
  console.log(timeFrame);
  return (
    <div className="card profile">
      <div className="content">
        <img src={profile} alt="jeremy image" />
        <div className="report text-[1.45rem] leading-[1.2]">
          Report for <span className="user">Jeremy Robson</span>
        </div>
      </div>
      <div className="links">
        <a
          href="#"
          className={`${timeFrame == "daily" ? "active" : ""}`}
          onClick={() => setTimeFrame("daily")}
        >
          Daily
        </a>
        <a
          href="#"
          className={`${timeFrame == "weekly" ? "active" : ""}`}
          onClick={() => setTimeFrame("weekly")}
        >
          Weekly
        </a>
        <a
          href="#"
          className={`${timeFrame == "monthly" ? "active" : ""}`}
          onClick={() => setTimeFrame("monthly")}
        >
          Monthly
        </a>
      </div>
    </div>
  );
};

export default Profile;
