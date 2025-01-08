import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/App.css";
import EditAnimalForm from "./EditPetPage";

function PetDetailsPage() {
  const { petsId } = useParams();
  const [pet, setPet] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false); // State to toggle edit mode
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/animals`);
        if (!response.ok) {
          throw new Error("Failed to fetch animals");
        }
        const animalsData = await response.json();

        const foundPet = animalsData.find(
          (animal) => String(animal.id) === String(petsId)
        );
        if (!foundPet) {
          throw new Error(`Pet with ID ${petsId} not found`);
        }
        console.log("Fetched Pet Data:", foundPet); // Debugging
        setPet(foundPet);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPet();
  }, [petsId]);

  const handleUpdatePet = async (updatedPet) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/animals/${petsId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedPet),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update pet details");
      }
      const updatedData = await response.json();
      setPet(updatedData); // Update the local state with the new data
      setIsEditing(false); // Exit edit mode
      console.log("Pet updated successfully!");
    } catch (error) {
      console.error("Error updating pet:", error);
      alert("Failed to update pet details. Please try again.");
    }
  };

  if (loading) {
    return <p>Loading pet details...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  // Use defensive checks and defaults
  const name = pet?.name || "Unnamed Pet";
  const breed = pet?.breeds?.primary || "Breed not specified";
  const color = pet?.colors?.primary || "Color not specified";
  const age = pet?.age || "Age not specified";
  const gender = pet?.gender || "Gender not specified";
  const size = pet?.size || "Size not specified";
  const coat = pet?.coat || "Coat not specified";
  const spayedNeutered = pet?.attributes?.spayed_neutered
    ? "Spayed/Neutered"
    : "Not Spayed/Neutered";
  const tags =
    pet?.tags?.length > 0 ? pet.tags.join(", ") : "No tags available";
  const description = pet?.description || "No description available";
  const photo = pet?.photos?.[0]?.medium || "https://via.placeholder.com/300";

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      {isEditing ? (
        <EditAnimalForm animal={pet} onSubmit={handleUpdatePet} />
      ) : (
        <>
          <h1 className="detailsTitle">{name}</h1>

          <img className="photoDetails" src={photo} alt="Pet Image" />

          <div className="textDetails">
            <p>Breed: {breed}</p>
            <p>Color: {color}</p>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
            <p>Size: {size}</p>
            <p>Coat: {coat}</p>
            <p>Attributes: {spayedNeutered}</p>
            <p>Tags: {tags}</p>
            <p>Description: {description}</p>
          </div>

          <div className="buttonGroup">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default PetDetailsPage;
