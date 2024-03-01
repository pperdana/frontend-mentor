const Nutrition = () => {
  return (
    <section>
      <h2 className="heading">Nutrition</h2>
      <p className="my-[8px]">
        The table below shows nutritional values per serving without the
        additional fillings.
      </p>
      <div className="table">
        <div className="row">
          <p className="item">Calories</p>
          <p className="item">
            <span>277kcal</span>
          </p>
        </div>

        <div className="row">
          <p className="item">Carbs</p>
          <p className="item">
            <span>0g</span>
          </p>
        </div>

        <div className="row">
          <p className="item">Protein</p>
          <p className="item">
            <span>20g</span>
          </p>
        </div>

        <div className="row">
          <p className="item">Fat</p>
          <p className="item">
            <span>22g</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
