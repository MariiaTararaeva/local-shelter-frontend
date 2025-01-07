import "../styles/AllPetsPage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <h1 className="title">Pet Finder MP</h1>
      <div className="card">
        <h5 className="titleCard">YOUR FUTURE PET</h5>
        <Link to="/listOfPets">
          <button className="buttonCard" type="button">
            Ready ?
          </button>
        </Link>
      </div>
      <div className="card">
        <h5 className="titleCard">GET IN TOUCH</h5>
        <Link to="/contact">
          <button className="buttonCard" type="button">
            Your Details
          </button>
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
