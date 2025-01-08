import { useState } from "react";
import "./styles/App.css";
import { useLocation } from "react-router-dom";
import AddNewAnimal from "./components/NewPetForm";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AllPetsPage from "./pages/AllPetsPage";
import ContactPage from "./pages/ContactPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function AppContent() {
  const [newAnimals, setNewAnimals] = useState([]); // State to manage the list of animals
  const [searchTerm, setSearchTerm] = useState(""); // Global state for search
  const location = useLocation();

  // Check if we are on the AllPetsPage
  const isSearchPage = location.pathname === "/listOfPets";

  return (
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
        <Route
          path="/pet/new"
          element={
            <AddNewAnimal
              newAnimals={newAnimals}
              setNewAnimals={setNewAnimals}
            />
          }
        />
        <Route path="/animals/:petsId" element={<PetDetailsPage />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
