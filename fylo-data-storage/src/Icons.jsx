import logo from "./assets/logo.svg";
import documentIcon from "./assets/icon-document.svg";
import folderIcon from "./assets/icon-folder.svg";
import uploadIcon from "./assets/icon-upload.svg";

const Icons = () => {
  return (
    <section className="icons">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="items">
        <div className="document">
          <img src={documentIcon} alt="icon document" />
        </div>
        <div className="folder">
          <img src={folderIcon} alt="icon folder" />
        </div>
        <div className="upload">
          <img src={uploadIcon} alt="icon upload" />
        </div>
      </div>
    </section>
  );
};

export default Icons;
