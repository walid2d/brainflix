import "./Header.scss";
import Logo from "../../Assets/Logo/BrainFlix-logo.svg";
import Pfp from "../../Assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Link to="/">
          <img className="nav__logo" src={Logo} alt=""></img>
        </Link>
        <div className="nav__search-box">
          <form className="search">
            <input
              className="search__input"
              placeholder="Search"
              type="search"
            ></input>
          </form>
          <img alt="" src={Pfp} className="pfp"></img>
          <Link to="/upload" className="btn--link">
            <button className="btn" type="submit">
              Upload
            </button>
          </Link>
          <img alt="" src={Pfp} className="pfp--tablet"></img>
        </div>
      </div>
    </nav>
  );
}
export default Header;
