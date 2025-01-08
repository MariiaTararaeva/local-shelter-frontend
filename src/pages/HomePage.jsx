import "../src/app.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="imgContainer">
        <img
          className="homePhoto"
          src="./src/assets/adopted shelter.png"
          alt="Pet Picture"
        />
        <h1 className="titleHome">Welcome to Gooby</h1>
      </div>
      <article className="aboutUsText">
        <p>
          Welcome to Gooby, a haven for homeless pets and a bridge to loving
          families. Our mission is simple yet profound: to provide abandoned and
          rescued animals with the care, compassion, and second chances they
          deserve. At Gooby, we believe every pet deserves a forever home. Our
          dedicated team works tirelessly to ensure every animal is healthy,
          happy, and ready for adoption. From playful kittens to loyal senior
          dogs, we have pets of all sizes, breeds, and personalities waiting to
          meet you. Beyond adoptions, we are committed to raising awareness
          about animal welfare and promoting responsible pet ownership.
          Together, we can create a world where no pet is left behind. Join us
          on this journey-whether by adopting, volunteering, or supporting our
          cause. Because when you open your heart to a pet in need, you change
          lives, theirs and yours.
        </p>
      </article>
      <div></div>
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
