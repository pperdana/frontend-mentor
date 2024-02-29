const App = () => {
  return (
    <main className="">
      <img
        src="./assets/images/image-omelette.jpeg"
        alt="presentation of an omelette"
      />
      <div>
        <h1>Simple Omelette Recipe</h1>

        <p>
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <summary className="summary">
          <p>Preparation time</p>
          <ul className="summary-list">
            <li>
              <p>
                <span>Total:</span> Approximately 10 minutes
              </p>
            </li>
            <li>
              <p>
                <span>Preparation:</span> 5 minutes
              </p>
            </li>
            <li>
              <p>
                <span>Cooking:</span> 5 minutes
              </p>
            </li>
          </ul>
        </summary>
        <section>
          <h2 className="heading">Ingredients</h2>
          <ul>
            <li>
              <p>2-3 large eggs</p>
            </li>
            <li>
              <p>Salt, to taste</p>
            </li>
            <li>
              <p>Pepper, to taste</p>
            </li>
            <li>
              <p>1 tablespoon of butter or oil</p>
            </li>
            <li>
              <p>
                Optional fillings: cheese, diced vegetables, cooked meats, herbs
              </p>
            </li>
          </ul>
        </section>

        <section className="instructions">
          <h2 className="heading">Instructions</h2>
          <ol>
            <li>
              <p>
                <span>Beat the eggs:</span> In a bowl, beat the eggs with a
                pinch of salt and pepper until they are well mixed. You can add
                a tablespoon of water or milk for a fluffier texture.
              </p>
            </li>
            <li>
              <p>
                <span>Heat the pan:</span> Place a non-stick frying pan over
                medium heat and add butter or oil.
              </p>
            </li>
            <li>
              <p>
                <span>Cook the omelette:</span> Once the butter is melted and
                bubbling, pour in the eggs. Tilt the pan to ensure the eggs
                evenly coat the surface.
              </p>
            </li>
            <li>
              <p>
                <span>Add fillings (optional):</span> When the eggs begin to set
                at the edges but are still slightly runny in the middle,
                sprinkle your chosen fillings over one half of the omelette.
              </p>
            </li>
            <li>
              <p>
                <span>Fold and serve:</span> As the omelette continues to cook,
                carefully lift one edge and fold it over the fillings. Let it
                cook for another minute, then slide it onto a plate.
              </p>
            </li>
            <li>
              <p>
                <span>Enjoy:</span> Serve hot, with additional salt and pepper
                if needed.
              </p>
            </li>
          </ol>
        </section>

        <section>
          <h2 className="heading">Nutrition</h2>
          <p className="margin-block:8px ;">
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
      </div>
    </main>
  );
};

export default App;
