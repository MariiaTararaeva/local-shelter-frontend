import NewPetForm from "../components/NewPetForm";

function EditAnimal({ animal }) {
  const handleUpdate = async (updatedAnimal) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/animals/${animal.id}`,
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
    } catch (error) {
      console.error("Error updating animal:", error.message);
    }
  };

  return (
    <div>
      <h2>Edit Animal</h2>
      <NewPetForm animal={animal} onSubmit={handleUpdate} />
    </div>
  );
}

export default EditAnimal;
