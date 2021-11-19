import "./Layout.css";
import Navbar from "../Nav/Navbar";

const Layout = (props) => {
  
  return(
  <div className="layout">
    <Navbar user={props.user} onSubmit={props.handleSubmit} handleSearch={props.handleSearch} />
    <div className="layout-children">{props.children}</div>
  </div>
);
}
export default Layout;
