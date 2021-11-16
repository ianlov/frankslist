import "./style.css";
import Search from "./Search/Search.js"

const Navbar = () => {
  
  return (
    <nav className="container">
      <div className="nav__left">
        <h1 className="nav__logo">frankslist</h1>
        <Search />
      </div>
      <div className="nav__right">
        <ul className="nav__ul">
          <li>
            <a>All Hobbies</a>
          </li>
          <li>
            <a>About Us</a>
          </li>
          <li>
            <a>Log in</a>
          </li>
        </ul>
        <button className="nav__button">Sign Up</button>
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
