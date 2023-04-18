import "./Gallery.styles.scss";

import milkImg from "../../images/desktop/image-gallery-milkbottles.jpg";
import orangeImg from "../../images/desktop/image-gallery-orange.jpg";
import coneImg from "../../images/desktop/image-gallery-cone.jpg";
import sugarCubeImg from "../../images/desktop/image-gallery-sugarcubes.jpg";

const Gallery = () => {
  return (
    <section className="section-gallery" id="gallery">
      <div className="gallery-container">
        {/*  ITEM 01*/}
        <div className="gallery-item">
          <img src={milkImg} className="gallery-img" alt="milkbottles" />
        </div>

        {/*  ITEM 02*/}
        <div className="gallery-item">
          <img src={orangeImg} className="gallery-img" alt="orange" />
        </div>

        {/*  ITEM 03*/}
        <div className="gallery-item">
          <img src={coneImg} className="gallery-img" alt="cone" />
        </div>

        {/*  ITEM 04*/}
        <div className="gallery-item">
          <img src={sugarCubeImg} className="gallery-img" alt="sugarcubes" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
