import PropTypes from "prop-types";
import LogoText from "../assets/GoobyLogoShelter.png";

function NavBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (event) => {
    setSearchTerm && setSearchTerm(event.target.value);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={LogoText} alt="LogoText" />
      </div>
      {setSearchTerm && (
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search animals..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      )}
    </nav>
  );
}

NavBar.propTypes = {
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
};

export default NavBar;
