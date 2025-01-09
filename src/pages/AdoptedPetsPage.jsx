//add adopted update in form and adopted list on homepage
import { useEffect, useState } from "react";
import "../styles/App.css";

function AdoptedPetsPage() {
  const [adoptedPets, setAdoptedPets] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdoptedPets = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/adopted`);
        if (!response.ok) {
          throw new Error("Failed to fetch adopted pets");
        }
        const data = await response.json();
        setAdoptedPets(data);
      } catch (err) {
        console.error("Error fetching adopted pets:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAdoptedPets();
  }, []);

  if (loading) {
    return <p>Loading adopted pets...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="adoptedPetsPage">
      <h1>Adopted Pets</h1>
      {adoptedPets.length === 0 ? (
        <p>No adopted pets found.</p>
      ) : (
        <ul className="petsList">
          {adoptedPets.map((pet) => (
            <li key={pet.id}>
              <h3>{pet.name}</h3>
              <p>Breed: {pet.breed || "Unknown"}</p>
              <p>Age: {pet.age || "Unknown"}</p>
              <p>Gender: {pet.gender}</p>
              {pet.photos && pet.photos[0] && (
                <img src={pet.photos[0].medium} alt={pet.name} />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AdoptedPetsPage;
