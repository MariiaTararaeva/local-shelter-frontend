import "../styles/App.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import dogImage from "../assets/adopted shelter.png";

function HomePage() {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/animals`);
        if (!response.ok) {
          throw new Error("Failed to fetch animals");
        }
        const animalsData = await response.json();
        setAnimals(animalsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  const previewAnimals = animals.slice(0, 6);
  return (
    <div>
      <div className="imgContainer">
        <img className="homePhoto" src={dogImage} alt="Pet Picture" />
        <h1 className="titleHome">Welcome to Gooby </h1>
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

      <div className="card1">
        <h3 className="titleCard">Your future Pet</h3>
        {loading ? (
          <p>Loading animals...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <div className="previewAnimals">
            {previewAnimals.length > 0 ? (
              previewAnimals.map((animal) => (
                <div className="animalPreview" key={animal.id}>
                  <img
                    className="previewImage"
                    src={
                      animal.photos && animal.photos[0]?.small
                        ? animal.photos[0]?.small
                        : dogImage
                    }
                    alt={animal.name}
                  />
                  <p className="previewName">{animal.name}</p>
                </div>
              ))
            ) : (
              <p>No animals available for preview.</p>
            )}
          </div>
        )}
        <Link to="/listOfPets">
          <button className="buttonCard" type="button">
            See All Our Pets
          </button>
        </Link>
      </div>
      <div className="card2">
        <h3 className="titleCard">Adoption Information</h3>
        <Link to="/adopted">
          <button className="buttonCard" type="button">
            Your Details
          </button>
        </Link>
      </div>
    </div>
  );
}
export default HomePage;
