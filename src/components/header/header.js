import "./header.css";
import GenericImage from "../../controls/image";

// Deconstructing the props
function header({url = '', alt = ''}) {
  return (
    <div className="header-container">
        <GenericImage url={url} alt={alt}/>

      <h1>Counter Application</h1>

      <div className="header-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default header;
