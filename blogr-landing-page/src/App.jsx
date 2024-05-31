import Header from "./Header";
import Footer from "./Footer";

const App = () => {
  return (
    <div id="container">
      <Header />
      <main>
        <div id="Design">
          <h2 class="heading">Designed for the future</h2>
          <div id="main-txt-img">
            <div id="left">
              <div id="editor">
                <h3>Introducing an extensible editor</h3>
                <div class="para">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </div>
              </div>
              <div id="management">
                <h3>Robust content management</h3>
                <div class="para">
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you're in full control.
                </div>
              </div>
            </div>
            <div id="right">
              <img
                class="desktop"
                src="./images/illustration-editor-desktop.svg"
                alt="desktop"
              />
              <img
                class="mobile"
                src="./images/illustration-editor-mobile.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div id="state-of-art">
          <div id="left">
            <img
              src="./images/illustration-phones.svg"
              alt="illustration-phones"
            />
          </div>
          <div id="right">
            <h3>State of the Art Infrastructure</h3>
            <div class="para">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </div>
          </div>
        </div>
        <div id="about-blogr">
          <div id="left">
            <img
              class="laptop-desktop desktop"
              src="./images/illustration-laptop-desktop.svg"
              alt="laptop-desktop"
            />
            <img
              class="laptop-mobile mobile"
              src="./images/illustration-laptop-mobile.svg"
              alt="laptop-mobile"
            />
          </div>
          <div id="right">
            <div id="simple">
              <h3>Free, open, simple</h3>
              <div class="para">
                Blogr is a free and open source applicaiton backed by a large
                community of helpful developers. It supports features such as
                code syntax highlighting, RSS feeds, social media integration,
                third-party commenting tools, and works seamlessly with Google
                Analystics. The architecture is clean and is relatively easy to
                learn.
              </div>
            </div>
            <div id="powerful-tool">
              <h3>Powerful tooling</h3>
              <div class="para">
                Batteries included. We built a simple and straightforward CLI
                tool that makes customization and deployment a breeze, but
                capable of producing even the most complicated sites.
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
