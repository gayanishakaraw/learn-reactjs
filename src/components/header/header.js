import "./header.css";
import GenericImage from "../../controls/image";
import {Link} from 'react-router';

// Deconstructing the props
function header({url = '', alt = ''}) {
  return (
    <div className="header-container">
        <GenericImage url={url} alt={alt}/>

      <h1>Counter Application</h1>

      <div className="header-menu">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/comments">Comments</Link></li>
          <li><Link to="/todos">Todos</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default header;
