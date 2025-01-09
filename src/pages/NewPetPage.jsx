import { useNavigate } from "react-router-dom";
import NewPetForm from "../components/NewPetForm";

function AddNewAnimal() {
  const navigate = useNavigate();
  const handleCreate = async (newAnimal) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/animals`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newAnimal),
      });

      if (!response.ok) {
        throw new Error("Failed to add new animal");
      }
      navigate("/listOfPets");
    } catch (error) {
      console.error("Error creating animal:", error.message);
    }
  };

  return (
    <div>
      <h2>Add a New Animal</h2>
      <NewPetForm onSubmit={handleCreate} />
    </div>
  );
}

export default AddNewAnimal;
