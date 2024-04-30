const Header = () => {
  return (
    <section className="section-1">
      <header>
        <img src="images/logo.svg" alt="logo" />
        <nav>
          <a href="#">Features</a>
          <a href="#">Team</a>
          <a href="#">Sign In</a>
        </nav>
      </header>

      <img
        className="illustration-intro"
        src="images/illustration-intro.png"
        alt="illustration-intro"
      />
      <div>
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <a className="cta" href="#">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Header;
