import logo from "./assets/logo.svg";

const LeftWrapper = () => {
  return (
    <section className="left-wrapper max-w-[50%]">
      <div className="left-content-wrapper">
        <img className="w-[158px] h-[33px] mt-[3rem]" src={logo} alt="logo" />
        <section>
          <img className="mobile-image" src="./hero-mobile.jpg" alt="" />
        </section>
        <section className="text-wrapper">
          <div>
            <h1 className="text-[#ce9797] text-[5rem] font-extralight">
              W E ' R E
            </h1>
            <h1 className="text-[5rem] leading-[1]">C O M I N G</h1>
            <h1 className="text-[5rem] leading-[1]"> S O O N</h1>
          </div>
          <p className="text-[#ce9797] text-[1.02rem] leading-[1.7]">
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
            <button className="btn" aria-label="Submit button"></button>
          </form>
        </section>
      </div>
    </section>
  );
};

export default LeftWrapper;
