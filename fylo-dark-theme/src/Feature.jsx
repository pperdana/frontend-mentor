import accessIcon from "./assets/icon-access-anywhere.svg";
import securityIcon from "./assets/icon-security.svg";
import collaborationIcon from "./assets/icon-collaboration.svg";
import fileIcon from "./assets/icon-any-file.svg";

const Feature = () => {
  return (
    <section className="section-2 section-featured">
      <div>
        <img src={accessIcon} alt="icon-access-anywhere" />
        <h2>Access your files, anywhere</h2>
        <p>
          The ability to use a smartphone, tablet, or computer to access your
          account means your files follow you everywhere.
        </p>
      </div>

      <div>
        <img src={securityIcon} alt="icon-security" />
        <h2>Security you can trust</h2>
        <p>
          2-factor authentication and user-controlled encryption are just a
          couple of the security features we allow to help secure your files.
        </p>
      </div>

      <div>
        <img src={collaborationIcon} alt="icon-collaboration" />
        <h2>Real-time collaboration</h2>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
      </div>

      <div>
        <img src={fileIcon} alt="icon-any-file" />
        <h2>Store any type of file</h2>
        <p>
          Whether you're sharing holidays photos or work documents, Fylo has you
          covered allowing for all file types to be securely stored and shared.
        </p>
      </div>
    </section>
  );
};

export default Feature;
