import logo from "./assets/logo.svg";

const Header = () => {
  return (
    <header className="flex justify-center mt-[5.6rem] mb-[2.6rem]">
      <img className="md:w-[60px]" src={logo} alt="logo" />
    </header>
  );
};

export default Header;
