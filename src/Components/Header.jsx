import "./Header.scss";
import LogoUpload from "../Assets/Icons/upload.svg";
import Logo from "../Assets/Logo/BrainFlix-logo.svg";
import Pfp from "../Assets/Images/Mohan-muruge.jpg";

function Header() {
  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <img className="nav__logo" src={Logo} alt=""></img>
        <div className="nav__search-box">
          <form className="search">
            <input
              className="search__input"
              placeholder="Search"
              type="search"
            ></input>
          </form>
          <img alt="" src={Pfp} className="pfp"></img>
          <button className="btn" type="submit">
            Upload
          </button>
          <img alt="" src={Pfp} className="pfp--tablet"></img>
        </div>
      </div>
    </nav>
  );
}
export default Header;
