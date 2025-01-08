import "../app.css";
import { useEffect, useState } from "react";
import AnimalList from "../components/AnimalsList";
import PropTypes from "prop-types";

function AllPetsPage({ searchTerm }) {
  const [animals, setAnimals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/animals`);
        if (!response.ok) {
          throw new Error("Failed to fetch animals");
        }
        const animalsData = await response.json();
        setAnimals(animalsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAnimals();
  }, []);

  if (loading) return <p>Loading animals...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="title">All Our Pets</h1>
      <AnimalList animals={animals} searchTerm={searchTerm} />
    </div>
  );
}

AllPetsPage.propTypes = {
  searchTerm: PropTypes.string,
};

export default AllPetsPage;
