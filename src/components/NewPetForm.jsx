import { useState } from "react";
import "../styles/App.css";

function NewPetForm({ animal = {}, onSubmit }) {
  const [name, setName] = useState(animal.name || "");
  const [breed, setBreed] = useState(animal.breed || "");
  const [gender, setGender] = useState(animal.gender || "");
  const [age, setAge] = useState(animal.age || "");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAnimal = {
      name,
      breed,
      gender,
      age,
    };
    onSubmit(newAnimal); // Pass the animal object to parent
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Animal's name"
        />
      </label>
      <label>
        Breed:
        <input
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          placeholder="Animal's breed"
        />
      </label>
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        Age:
        <input
          type="string"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Animal's age"
        />
      </label>
      <button type="submit">Save Animal</button>
    </form>
  );
}

export default NewPetForm;
