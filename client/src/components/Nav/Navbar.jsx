import "./navbar.css";
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [hamDisplay, setHamDisplay] = useState(false);

  return (
    <>
      <nav className="navcontainer">
        <div className="nav__left">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="nav__logo">
              <img
                className="nav__logo__img"
                src="https://i.imgur.com/TEHnXjq.jpg"
                alt=""
              />
              <h1 style={{ marginLeft: "-21px" }}>frankslist</h1>
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
        <div className="hamburger" onClick={() => setHamDisplay(!hamDisplay)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div className="hamburgerMenu" style={{ display: hamDisplay && "flex" }}>
        <ul className="hamburgerMenu__ul">
          <li>
            <Link
              to="/hobbies"
              style={{ textDecoration: "none", color: "black" }}
            >
              <a>All Hobbies</a>
            </Link>
          </li>
          <li>
            <Link
              to="/aboutus"
              style={{ textDecoration: "none", color: "black" }}
            >
              <a>About Us</a>
            </Link>
          </li>
          <li>
            <Link
              to="/sign-in"
              style={{ textDecoration: "none", color: "black" }}
            >
              <a>Log in</a>
            </Link>
          </li>
        </ul>
        <Link to="/sign-in">
          <button className="hamburgerMenu__button">Sign Up</button>
        </Link>
        <p onClick={() => setHamDisplay(!hamDisplay)}>Close</p>
      </div>
    </>
  );
};

export default Navbar;
