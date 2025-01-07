import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AllPetsPage from "./pages/AllPetsPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import ContactPage from "./pages/ContactPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listOfPets" element={<AllPetsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/animals/:petsId" element={<PetDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
