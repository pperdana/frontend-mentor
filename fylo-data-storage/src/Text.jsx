const Text = () => {
  return (
    <section className="text">
      <div className="top">
        <p className="storage">
          You’ve used <span className="white">815 GB</span> of your storage
        </p>
      </div>
      <div className="meter">
        <div className="barouter">
          <div className="barinner">
            <div className="whitedot"></div>
          </div>
        </div>
        <div className="values">
          <p>0 GB</p>
          <p>1000 GB</p>
        </div>
        <div className="bubble">
          <p className="bubble2">185</p>
          <p className="gbleft">GB Left</p>
          <div className="triangle"></div>
        </div>
      </div>
    </section>
  );
};

export default Text;
