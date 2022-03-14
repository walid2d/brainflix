import "./Header.scss";
import Logo from "../../Assets/Logo/BrainFlix-logo.svg";
import Pfp from "../../Assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import { changeTitle } from "../../Utils/Utils";

function Header() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <Link to="/home">
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
          <Link to="/upload" className="btn--link" onClick={changeTitle}>
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
