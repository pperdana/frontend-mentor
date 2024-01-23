import illustration from "./assets/illustration-article.svg";
import avatar from "./assets/image-avatar.webp";

const App = () => {
  return (
    <main className="container max-w-[1440px] my-0 mx-auto h-[100vh] flex items-center	justify-center">
      <div className="card  max-w-[385px] h-[520px] bg-white p-[25px] flex flex-col	rounded-[18px] border-[1px]	border-solid	border-[hsl(0,0%,7%)]	shadow-[10px_10px_hsl(0,0%,7%)] transition-all duration-300 hover:shadow-[15px_15px_hsl(0,0%,7%)] md:w-[340px] md:h-[495px]">
        <div className="card-img">
          <img
            className="w-[100%] rounded-[10px] mb-[22px]"
            src={illustration}
            alt="card image"
          />
        </div>

        <div className="card-info">
          <p className="card-type inline-block	py-[4px] px-[12px] rounded-[6px] bg-[hsl(47,88%,63%)] font-bold mb-[14px] text-[14px]">
            Learning
          </p>
          <p className="card-date text-[16px] mb-[8px] font-semibold">
            Published 21 Dec 2023
          </p>

          <h1 className="card-title text-[24px] font-extrabold hover:text-[hsl(47,88%,63%)] cursor-pointer transition-all	duration-300">
            HTML &amp; CSS foundations
          </h1>

          <p className="card-desc leading-[1.5] text-[16px] text-[hsl(0,0%,50%)] font-normal	mt-[14px] mb-[16px] mx-0">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>

          <div className="card-profile flex items-center	gap-[16px]">
            <div className="avatar">
              <img src={avatar} alt="avatar" className="avatar-img w-[32px]" />
            </div>
            <p className="avatar-name font-extrabold	 text-[14px]">
              Greg Hooper
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
