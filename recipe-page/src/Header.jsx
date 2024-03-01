import omeletteImg from "./assets/image-omelette.jpeg";

const Header = () => {
  return (
    <header>
      <img
        className="block w-full"
        src={omeletteImg}
        alt="presentation of an omelette"
      />
    </header>
  );
};

export default Header;
