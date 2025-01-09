import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewPetForm from "../components/NewPetForm";

function EditAnimal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/animals/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch animal");
        }
        const animalData = await response.json();
        setAnimal(animalData);
      } catch (error) {
        console.error("Error fetching animal:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  const handleUpdate = async (updatedAnimal) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/animals/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedAnimal),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update animal");
      }

      console.log("Animal updated successfully");
      navigate("/listOfPets"); // Navigate back to the pet list
    } catch (error) {
      console.error("Error updating animal:", error.message);
    }
  };

  if (loading) return <p>Loading animal data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Edit Animal</h2>
      <NewPetForm animal={animal} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditAnimal;
