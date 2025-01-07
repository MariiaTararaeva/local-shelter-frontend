import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AllPetsPage from "./pages/AllPetsPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import ContactPage from "./pages/ContactPage";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState(""); // Search State

  // Dynamically check the current route
  const location = window.location.pathname;
  const isSearchPage = location === "/listOfPets";

  return (
    <Router>
      <div className="App">
        <NavBar
          searchTerm={isSearchPage ? searchTerm : ""}
          setSearchTerm={isSearchPage ? setSearchTerm : null}
        />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/listOfPets"
            element={
              <AllPetsPage
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            }
          />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/animals/:petsId" element={<PetDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
