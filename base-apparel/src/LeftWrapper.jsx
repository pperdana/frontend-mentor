import logo from "./assets/logo.svg";
import arrowIcon from "./assets/icon-arrow.svg";

import heroMobile from "./assets/hero-mobile.jpg";

const LeftWrapper = () => {
  return (
    <section className="left-box max-w-[50%] lg:max-w-[100%] lg:py-[5rem]">
      <div className="left-content-wrapper">
        <img
          className="w-[15.8rem] h-[3.3rem] mt-[3rem] lg:mt-0"
          src={logo}
          alt="logo"
        />

        <section>
          <img className="mobile-image" src={heroMobile} alt="hero mobile" />
        </section>

        <section className="text-box">
          <div>
            <h1 className="text-[#ce9797] text-[6rem] font-extralight lg:text-[5.5rem]">
              W E ' R E
            </h1>
            <h1 className="text-[6rem] leading-[1] lg:text-[5.5rem]">
              C O M I N G
            </h1>
            <h1 className="text-[6rem] leading-[1] lg:text-[5.5rem]">
              {" "}
              S O O N
            </h1>
          </div>
          <p className="text-[#ce9797] text-[1.5rem] leading-[1.7] lg:mb-[1rem]">
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form className="relative" action="">
            <input
              className="input"
              type="email"
              placeholder="Email Address"
              value=""
            />
            <button className="btn" aria-label="Submit button">
              <img src={arrowIcon} alt="arrow icon" />
            </button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default LeftWrapper;
