import "./navbar.css";
import disneyPlusLogo from "../resources/navbar/logo.svg";
import homeIcon from "../resources/navbar/home-icon.svg";
import searchIcon from "../resources/navbar/search-icon.svg";
import watchListIcon from "../resources/navbar/watchlist-icon.svg";
import originalIcon from "../resources/navbar/original-icon.svg";
import movieIcon from "../resources/navbar/movie-icon.svg";
import seriesIcon from "../resources/navbar/series-icon.svg";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <a href="/" className="navbar__logo">
        <img src={disneyPlusLogo} alt="disney+" id="navbar__disney-plus-logo" />
      </a>
      <div className="navbar__menu">
        <a href="/home" className="menu__home">
          <img src={homeIcon} alt="Home" />
          <span>Home</span>
        </a>
        <a href="/search">
          <img src={searchIcon} alt="Search" />
          <span>Search</span>
        </a>
        <a href="/watch-list">
          <img src={watchListIcon} alt="Watch list" />
          <span>WatchList</span>
        </a>
        <a href="/originals">
          <img src={originalIcon} alt="Originals" />
          <span>Originals</span>
        </a>
        <a href="/movies">
          <img src={movieIcon} alt="Movies" />
          <span>Movies</span>
        </a>
        <a href="/series">
          <img src={seriesIcon} alt="Series" />
          <span>Series</span>
        </a>
      </div>
      <button className="navbar__login-btn">Login</button>
    </nav>
  );
};

export default Navbar;
