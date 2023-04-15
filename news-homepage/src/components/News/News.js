import "./News.styles.css";

import Hero from "../Hero/Hero";
import New from "../New/New";
import Step from "../Step/Step";

const News = () => {
  return (
    <main>
      <section className="news">
        <div className="container grid">
          <Hero />
          <New />
          <Step />
        </div>
      </section>
    </main>
  );
};

export default News;
