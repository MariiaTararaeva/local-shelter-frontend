import { NavLink } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // State at component level

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState); // Toggle visibility
  };

  return (
    <div>
      {/* Hamburger Menu Button */}
      <button className="menu-button" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`}>
        <div className="menu-item">
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/pet/new">Add a new item</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/about">About</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
