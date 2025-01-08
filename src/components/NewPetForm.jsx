import { useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import "../styles/App.css";

function AddNewAnimal({ newAnimals, setNewAnimals }) {
  // State variables for the form
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [size, setSize] = useState("");
  const [coat, setCoat] = useState("");
  const [attributes, setAttributes] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");

  // Submit handler
  function handleSubmit(event) {
    event.preventDefault();

    // Validate required fields
    if (!name || !breed || !age || !gender) {
      alert("Please fill in all required fields (Name, Breed, Age, Gender).");
      return;
    }

    const newAnimal = {
      id: uuidv4(),
      name,
      breed,
      color,
      age,
      gender,
      size,
      coat,
      attributes,
      tags,
      description,
      images,
    };

    // Add new animal to the list
    setNewAnimals([newAnimal, ...newAnimals]);

    // Reset form fields
    setName("");
    setBreed("");
    setColor("");
    setAge(0);
    setGender("");
    setSize("");
    setCoat("");
    setAttributes("");
    setTags("");
    setDescription("");
    setImages("");
  }

  return (
    <div className="form">
      <h2>Add a New Animal to Our Shelter!</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>
          Animal Name:
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
            required
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
            required
            type="number"
            value={age}
            placeholder="Enter the animal's age"
            onChange={(event) => setAge(event.target.value)}
          />
        </label>

        {/* Gender */}
        <label>
          Gender:
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
