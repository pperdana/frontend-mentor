const Title = () => {
  return (
    <div className="title-container sm:flex sm:flex-col sm:items-center">
      <h1 className="text-[2.5rem] text-start font-bold leading-[50px] md:text-center md:mb-[2.6rem] sm:mx-[1.8rem] sm:text-[1.8rem] sm:mb-[1.2rem] sm:leading-[40px]">
        Learn to code by watching others
      </h1>
      <p className="text-[14px] leading-[23px] text-start text-gray-100 mt-[1.4rem] md:text-center sm:mx-[1.6rem] sm:text-[16px] sm:mt-0 sm:leading-[26px]">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
};

export default Title;
