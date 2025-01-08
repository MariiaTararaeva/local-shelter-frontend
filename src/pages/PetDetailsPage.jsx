import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/App.css";

function PetDetailsPage() {
  const { petsId } = useParams();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/animals`);
        if (!response.ok) {
          throw new Error("Failed to fetch animals");
        }
        const animalsData = await response.json();
        console.log("Fetched animals:", animalsData); // Debug fetched data

        // Find the specific pet by ID
        const foundPet = animalsData.find(
          (animal) => String(animal.id) === String(petsId)
        );
        if (!foundPet) {
          throw new Error(`Pet with ID ${petsId} not found`);
        }
        setPet(foundPet); // Update state with the specific pet
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false); // Stop loading spinner
      }
    };

    fetchPet();
  }, [petsId]);

  if (loading) {
    return <p>Loading pet details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h1 className="detailsTitle">{pet.name}</h1>

      {pet.photos && pet.photos[0] && (
        <img
          className="photoDetails"
          src={pet.photos[0].medium}
          alt="Pet Image"
        />
      )}
      <div className="textDetails">
        <p>Breed: {pet.breeds.primary}</p>
        <p>Color: {pet.colors.primary || "Unknown"}</p>
        <p>Age: {pet.age}</p>
        <p>Gender: {pet.gender}</p>
        <p>Size: {pet.size}</p>
        <p>Coat: {pet.coat}</p>
        <p>
          Attributes:{" "}
          {pet.attributes.spayed_neutered
            ? "Spayed/Neutered"
            : "Not Spayed/Neutered"}
        </p>
        <p>
          Tags: {pet.tags && pet.tags.length > 0 ? pet.tags.join(", ") : "None"}
        </p>
        <p>Description: {pet.description}</p>
        {/* <p>Status: {pet.status}</p> */}
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
}

export default PetDetailsPage;
