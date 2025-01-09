import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/App.css";

function NewPetForm({ animal = {}, onSubmit }) {
  const [name, setName] = useState(animal.name || "");
  const [breed, setBreed] = useState(animal.breed || "");
  const [gender, setGender] = useState(animal.gender || "");
  const [age, setAge] = useState(animal.age || "");
  const [imagesArray, setImagesArray] = useState(animal.photos || []);
  const [image, setImage] = useState(animal.image || "");
  const [description, setDescription] = useState(animal.description || "");
  const navigate = useNavigate();

  const [pet, setPet] = useState(animal);

  const { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/animals/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch animals");
        }
        const petData = await response.json();
        console.log("Pet data:", petData);
        setPet(petData);
        setName(petData.name);
        setBreed(petData.breeds.primary);
        setGender(petData.gender);
        setAge(petData.age);
        setImagesArray(petData.photos);
        setImage(petData.photos[0]?.large || "");
        setDescription(petData.description || "");
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    if (id) {
      fetchPet();
    }
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

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !breed.trim() || !gender.trim() || !age.trim()) {
      alert("Please fill out all required fields.");
      return;
    }
    const newAnimal = {
      name,
      breeds: { primary: breed },
      gender,
      age,
      photos: [
        { ...imagesArray[0], large: image },
        imagesArray[1],
        imagesArray[2],
      ],
      description: description || null,
    };
    if (onSubmit) {
      onSubmit(newAnimal);
    } else {
      handleUpdate(newAnimal);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Animal's name"
          required
        />
      </label>
      <label>
        Breed:
        <input
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          placeholder="Animal's breed"
          required
        />
      </label>
      <label>
        Gender:
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        Age:
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Animal's age"
          required
        />
      </label>
      <label>
        Image URL:
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="Image URL"
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Animal's description"
        />
      </label>
      <button type="submit">Save Animal</button>
    </form>
  );
}

export default NewPetForm;
