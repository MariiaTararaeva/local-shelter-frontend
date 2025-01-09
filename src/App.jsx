import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

// Importing components and pages
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import AllPetsPage from "./pages/AllPetsPage";
import AdoptedPetsPage from "./pages/AdoptedPetsPage";
import EditAnimalForm from "./pages/EditPetPage";
import AddNewAnimal from "./pages/NewPetPage";
import NewPetForm from "./components/NewPetForm";
import PetDetailsPage from "./pages/PetDetailsPage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
              animals={newAnimals}
              setAnimals={setNewAnimals}
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
          }
        />

        <Route path="/adopted" element={<AdoptedPetsPage />} />

        <Route path="/edit-animal/:id" element={<EditAnimalForm />} />
        <Route path="/newpetform/:id" element={<NewPetForm />} />

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

        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", marginTop: "50px" }}>
              <h2>404 - Page Not Found</h2>
              <p>Sorry, the page you are looking for does not exist.</p>
            </div>
          }
        />
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
