const Title = () => {
  return (
    <div className="title-container sm:flex sm:flex-col sm:items-center">
      <h1 className="text-[2.5rem] text-start font-bold leading-[50px] md:text-center md:mb-[2.6rem] sm:w-[350px]">
        Learn to code by watching others
      </h1>
      <p className="text-[14px] leading-[23px] text-start text-gray-100 mt-[1.4rem] md:text-center sm:mx-[2rem] sm:text-[20px]">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
    </div>
  );
};

export default Title;
