import styled from "styled-components";
const Design = () => {
  return (
    <div id="Design">
      <h2 className="heading">Designed for the future</h2>
      <div id="main-txt-img">
        <div id="left">
          <div id="editor">
            <h3>Introducing an extensible editor</h3>
            <div className="para">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </div>
          </div>
          <div id="management">
            <h3>Robust content management</h3>
            <div className="para">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you're in full control.
            </div>
          </div>
        </div>
        <div id="right">
          <img
            className="desktop"
            src="./images/illustration-editor-desktop.svg"
            alt="desktop"
          />
          <img
            className="mobile"
            src="./images/illustration-editor-mobile.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Design;
