import "./App.scss";

function App() {
  return (
    <main>
      <section className="container">
        <div className="header">
          <h1>Notifications 3</h1>
          <span>Mark all as read</span>
        </div>
        <div className="people">
          <div className="card">
            <div className="desc">
              Mark Webber reacted to your recent post My first tournament today!
            </div>
            <div className="time">1m ago</div>
          </div>
          <div className="card">
            <div className="desc">Angela Gray followed you</div>
            <div className="time">5m ago</div>
          </div>

          <div className="card">
            <div className="desc">
              Jacob Thompson has joined your group Chess Club
            </div>
            <div className="time">1 day ago</div>
          </div>
          <div className="card">
            <div className="desc">
              Rizky Hasanuddin sent you a private message
            </div>
            <div className="time">5 days ago</div>
          </div>
          <div className="card">
            <div className="desc">Kimberly Smith commented on your picture</div>
            <div className="time">1 week ago</div>
          </div>
          <div className="card">
            <div className="desc">
              Nathan Peterson reacted to your recent post 5 end-game strategies
              to increase your win rate
            </div>
            <div className="time">2 weeks ago</div>
          </div>
          <div className="card">
            <div className="desc">Anna Kim left the group Chess Club</div>
            <div className="time">2 weeks ago</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
