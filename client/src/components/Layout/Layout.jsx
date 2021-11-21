import "./Layout.css";
import Navbar from "../Nav/Navbar";

const Layout = (props) => {
  return (
    <div className="layout">
      <Navbar
        user={props.user}
        setUser={props.setUser}
        onSubmit={props.handleSubmitSearch}
        handleSearch={props.handleSearch}
      />
      <div className="layout-children">{props.children}</div>
    </div>
  );
};
export default Layout;
