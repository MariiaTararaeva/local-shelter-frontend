import { Link } from "react-router-dom";
import "../styles/App.css";

function AnimalList({ animals, searchTerm, setAnimals }) {
  const filteredAnimals = animals.filter((animal) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      animal.name.toLowerCase().includes(lowerSearchTerm) ||
      (animal.type && animal.type.toLowerCase().includes(lowerSearchTerm)) ||
      (animal.gender && animal.gender.toLowerCase().includes(lowerSearchTerm))
    );
  });

  if (filteredAnimals.length === 0) {
    return <p>No animals match your search</p>;
  }

  const deleteAnimal = (id) => {
    setAnimals(animals.filter((animal) => animal.id !== id));
  };

  return (
    <div className="animal-list">
      {filteredAnimals.map((animal) => (
        <div className="petBox" key={animal.id}>
          <div className="image-column">
            <img
              className="photoBox"
              src={
                animal.photos && animal.photos[0]
                  ? animal.photos[0].small
                  : "./src/assets/localShelterLogoImage.png"
              }
              alt="Pet Pic"
            />
          </div>
          <div className="text-column">
            <p>
              <span className="petName">
                {animal.name} ({animal.gender})
              </span>
              {animal.name} is a {animal.age} {animal.type}..would you like to
              know more?
            </p>
            <div className="buttonContainer">
              <Link to={`/animals/${animal.id}`}>
                <button className="buttonBox" type="button">
                  Details
                </button>
              </Link>
              <button
                className="deleteButtonBox"
                type="button"
                onClick={() => deleteAnimal(animal.id)}
              >
                X
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnimalList;
