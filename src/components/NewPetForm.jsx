import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import "../styles/App.css";

function AddNewAnimal({ newAnimals, setNewAnimals }) {
  const navigate = useNavigate();

  // State variables for the form
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [coat, setCoat] = useState("");
  const [attributes, setAttributes] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");
  const [error, setError] = useState(null);

  // 🐾 Async function to add a new animal
  const createAnimal = async (newAnimal) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/animals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAnimal),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      console.log("Animal successfully added!");
      navigate("/animals");
    } catch (error) {
      console.error("Error creating animal:", error);
      setError(
        error.message ||
          "There was an error creating the animal. Please try again."
      );
    }
  };

  // 📝 Form Submit Handler
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate required fields
    if (!name.trim()) {
      alert("Please provide a name for the animal.");
      return;
    }

    if (!gender) {
      alert("Please select a gender for the animal.");
      return;
    }

    const newAnimal = {
      id: uuidv4(),
      name,
      breed: breed || null,
      color: color || null,
      age: age || null,
      gender,
      size: size || null,
      coat: coat || null,
      attributes: attributes || null,
      tags: tags || null,
      description: description || null,
      images: images || null,
    };

    // Add new animal to the API
    await createAnimal(newAnimal);

    // Add new animal to the local state if API call was successful
    if (!error) {
      setNewAnimals([newAnimal, ...newAnimals]);

      // Reset form fields
      setName("");
      setBreed("");
      setColor("");
      setAge("");
      setGender("");
      setSize("");
      setCoat("");
      setAttributes("");
      setTags("");
      setDescription("");
      setImages("");
    }
  };

  return (
    <div className="form">
      <h2>Add a New Animal to Our Shelter!</h2>
      {error && <p className="error">⚠️ Oops... </p>}
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>
          Animal Name: <span style={{ color: "red" }}>*</span>
          <input
            required
            type="text"
            value={name}
            placeholder="Enter the animal's name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        {/* Breed */}
        <label>
          Breed:
          <input
            type="text"
            value={breed}
            placeholder="Enter the animal's breed"
            onChange={(event) => setBreed(event.target.value)}
          />
        </label>

        {/* Color */}
        <label>
          Color:
          <input
            type="text"
            value={color}
            placeholder="Enter the animal's color"
            onChange={(event) => setColor(event.target.value)}
          />
        </label>

        {/* Age */}
        <label>
          Age:
          <input
            type="number"
            value={age}
            placeholder="Enter the animal's age"
            onChange={(event) => setAge(event.target.value)}
          />
        </label>

        {/* Gender */}
        <label>
          Gender: <span style={{ color: "red" }}>*</span>
          <select
            required
            value={gender}
            onChange={(event) => setGender(event.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>

        {/* Size */}
        <label>
          Size:
          <input
            type="text"
            value={size}
            placeholder="Enter the animal's size"
            onChange={(event) => setSize(event.target.value)}
          />
        </label>

        {/* Coat */}
        <label>
          Coat:
          <input
            type="text"
            value={coat}
            placeholder="Enter the animal's coat type"
            onChange={(event) => setCoat(event.target.value)}
          />
        </label>

        {/* Attributes */}
        <label>
          Attributes:
          <input
            type="text"
            value={attributes}
            placeholder="Enter any special attributes"
            onChange={(event) => setAttributes(event.target.value)}
          />
        </label>

        {/* Tags */}
        <label>
          Tags:
          <input
            type="text"
            value={tags}
            placeholder="Enter tags (e.g., friendly, shy)"
            onChange={(event) => setTags(event.target.value)}
          />
        </label>

        {/* Description */}
        <label>
          Description:
          <textarea
            value={description}
            placeholder="Write a short description about the animal"
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </label>

        {/* Images */}
        <label>
          Images (URL):
          <input
            type="text"
            value={images}
            placeholder="Enter image URLs (comma-separated)"
            onChange={(event) => setImages(event.target.value)}
          />
        </label>

        {/* Submit Button */}
        <button type="submit" className="buttonStyling">
          Add New Animal
        </button>
      </form>
    </div>
  );
}

AddNewAnimal.propTypes = {
  newAnimals: PropTypes.array.isRequired,
  setNewAnimals: PropTypes.func.isRequired,
};

export default AddNewAnimal;
