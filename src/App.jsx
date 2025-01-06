import "./App.css";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AllPetsPage from "./pages/AllPetsPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import ContactPage from "./pages/ContactPage";


function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/listOfPets' element= {<AllPetsPage/>} />
      <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
