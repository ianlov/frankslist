import "./navbar.css";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navcontainer">
      <div className="nav__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav__logo">
            <img
              className="nav__logo__img"
              src="https://images.unsplash.com/photo-1624300603538-1207400f4116?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
              alt=""
            />
            <h1>frankslist</h1>
          </div>
        </Link>
        <Search />
      </div>
      <div className="nav__right">
        <ul className="nav__ul">
          <li>
            <Link to="/hobbies">
              <a>All Hobbies</a>
            </Link>
          </li>
          <li>
            <Link to="/aboutus">
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link to="/sign-in">
              <a>Log in</a>
            </Link>
          </li>
        </ul>
        <Link to="/sign-in">
          <button className="nav__button">Sign Up</button>
        </Link>
      </div>

      <div className="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
