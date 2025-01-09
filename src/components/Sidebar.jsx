import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import "../styles/App.css";

function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  // Check if the current path is the Animal Details Page
  const isAnimalDetailsPage = /^\/animals\/\w+/.test(location.pathname);

  return (
    <div>
      <button className="menu-button" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        {/* Home Link */}
        <div className="menu-item">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </div>

        {(location.pathname === "/" ||
          location.pathname === "/listOfPets" ||
          isAnimalDetailsPage) && (
          <div className="menu-item">
            <NavLink to="/pet/new">Add a New Animal</NavLink>
          </div>
        )}

        {location.pathname === "/" && (
          <div className="menu-item">
            <NavLink to="/listOfPets">View All Pets</NavLink>
          </div>
        )}

        {location.pathname === "/listOfPets" && (
          <div className="menu-item">
            <NavLink to="/adopted">Adopted Pets</NavLink>
          </div>
        )}

        {(location.pathname.startsWith("/edit-animal") ||
          location.pathname.startsWith("/pet/new")) && (
          <div className="menu-item">
            <NavLink to="/listOfPets">Back to All Pets</NavLink>
          </div>
        )}

        {(location.pathname.startsWith("/edit-animal") ||
          location.pathname.startsWith("/pet/new")) && (
          <div className="menu-item">
            <NavLink to="/">Return Home</NavLink>
          </div>
        )}

        {location.pathname === "/adopted" && (
          <div className="menu-item">
            <NavLink to="/pet/new">Add a New Pet</NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
