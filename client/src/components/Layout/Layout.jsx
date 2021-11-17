import "./Layout.css";
import Navbar from "../Nav/Navbar";

const Layout = (props) => (
  <div className="layout">
    <Navbar user={props.user} />
    <div className="layout-children">{props.children}</div>
  </div>
);

export default Layout;
