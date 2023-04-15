import "./Gallery.styles.scss";

import milkImg from "../../images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../../images/desktop/image-gallery-orange.jpg";
import coneImg from "../../images/desktop/image-gallery-cone.jpg";
import sugarCubeImg from "../../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <section class="section-gallery" id="gallery">
      <div class="gallery-container">
        {/*  ITEM 01*/}
        <div class="gallery-item">
          <img src={milkImg} class="gallery-img" alt="milkbottles" />
        </div>

        {/*  ITEM 02*/}
        <div class="gallery-item">
          <img src={orangeImg} class="gallery-img" alt="orange" />
        </div>

        {/*  ITEM 03*/}
        <div class="gallery-item">
          <img src={coneImg} class="gallery-img" alt="cone" />
        </div>

        {/*  ITEM 04*/}
        <div class="gallery-item">
          <img src={sugarCubeImg} class="gallery-img" alt="sugarcubes" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
