import LogoText from "../assets/GoobyLogoShelter.png";
import "../styles/App.css";
import { Link } from "react-router-dom";

function NavBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm && setSearchTerm(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={LogoText} alt="LogoText" />
        </Link>
      </div>
      {setSearchTerm && (
        <div className="navbar-search">
          <input
            className="searchBar"
            type="text"
            placeholder="  Search animals..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      )}
    </nav>
  );
}

export default NavBar;
