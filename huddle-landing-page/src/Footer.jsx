const Footer = () => {
  return (
    <footer className="">
      <img className="w-100" src="./images/bg-footer-top-desktop.svg" alt="" />
      <div className="row gx-0 foot mx-0 d-flex flex-column-reverse flex-md-row">
        <div className="col-12 col-md-6 p-0  text-light">
          <img
            className="w-50 my-5 text-light mx-2 mx-md-5"
            src="/images/logofooter.svg"
            alt=""
          />
          <p className="mx-2 fs-6 mx-md-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            consectetur eum reprehenderit quibusdam laborum architecto
            voluptates minus facere iusto rem?
          </p>
          <p className="my-1 mx-2 mx-md-5">
            <img className="icon" src="./images/icon-phone.svg" alt="" />
            +917339786286
          </p>
          <p className=" my-1 mx-2 mx-md-5">
            <img className="icon" src="./images/icon-email.svg" alt="" />
            example@gmail.com
          </p>
          <div className="mx-2 mx-md-5 my-5 fs-3 d-flex justify-content-start">
            <i className="fa-brands fa-facebook mx-2"></i>
            <i className="fa-brands fa-instagram mx-2"></i>
            <i className="fa-brands fa-x-twitter mx-2"></i>
          </div>
        </div>
        <div className="col-12 col-md-6 text-lg-start p-0 text-center pb-3">
          <h1 className="my-5 text-light">Newsletter</h1>
          <p className="text-light md-mr-20 my-3 mx-2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam
            repudiandae sit, consequuntur fugit unde officia id incidunt
            provident saepe possimus quaerat eius dicta nobis dolores itaque
            aliquid quae consequatur tenetur.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center justify-content-md-start">
            <input
              className="rounded-2 border-0 md-mr-20 mx-md-0"
              type="text"
            />
            <button className="py-md-2 px-md-5 my-md-0 md-mr-20 mx-5 mx-md-2 my-2 py-1 px-1 border-0 rounded-2 buttonhero">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
