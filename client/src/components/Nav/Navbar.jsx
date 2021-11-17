import "./style.css";
import Search from "../Search/Search";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="nav__left">
        <Link to="/">
          <h1 className="nav__logo">frankslist</h1>
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
            <Link>
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link>
              <a>Log in</a>
            </Link>
          </li>
        </ul>
        <Link to="/sign">
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
