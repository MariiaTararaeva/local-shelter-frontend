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
      {/* Sidebar Toggle Button */}
      <button className="menu-button" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar Menu */}
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

        {/* Add New Animal (Visible on Home, List of Pets, and Animal Details Pages) */}
        {(location.pathname === "/" ||
          location.pathname === "/listOfPets" ||
          isAnimalDetailsPage) && (
          <div className="menu-item">
            <NavLink to="/pet/new">Add a New Animal</NavLink>
          </div>
        )}

        {/* View All Pets (only on Home page) */}
        {location.pathname === "/" && (
          <div className="menu-item">
            <NavLink to="/listOfPets">View All Pets</NavLink>
          </div>
        )}

        {/* Adopted Pets (only on List of Pets page) */}
        {location.pathname === "/listOfPets" && (
          <div className="menu-item">
            <NavLink to="/adopted">Adopted Pets</NavLink>
          </div>
        )}

        {/* Back to All Pets (on Edit or New Pet pages) */}
        {(location.pathname.startsWith("/edit-animal") ||
          location.pathname.startsWith("/pet/new")) && (
          <div className="menu-item">
            <NavLink to="/listOfPets">Back to All Pets</NavLink>
          </div>
        )}

        {/* Return Home (on Edit or New Pet pages) */}
        {(location.pathname.startsWith("/edit-animal") ||
          location.pathname.startsWith("/pet/new")) && (
          <div className="menu-item">
            <NavLink to="/">Return Home</NavLink>
          </div>
        )}

        {/* Add New Animal (on Adopted Pets page) */}
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
